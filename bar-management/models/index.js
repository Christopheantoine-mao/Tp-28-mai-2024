import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Sequelize, DataTypes } from 'sequelize';
import process from 'process';

// Chemin absolu vers config.json en utilisant file:// URL
const configDirPath = 'C:/Users/Administrateur/Desktop/Tp 28 mai 2024/bar-management/configDatabase';
const configFilePath = path.join(configDirPath, 'config.json');
const configPath = pathToFileURL(configFilePath).href;

// Vérifiez si le dossier existe
if (!fs.existsSync(configDirPath)) {
  console.error(`Directory not found at ${configDirPath}`);
  process.exit(1); // Arrêtez le processus si le dossier n'existe pas
}

// Liste le contenu du dossier pour déboguer
const files = fs.readdirSync(configDirPath);
console.log('Fichiers dans configDatabase:', files);

// Vérifiez si le fichier existe
if (!fs.existsSync(configFilePath)) {
  console.error(`Config file not found at ${configFilePath}`);
  process.exit(1); // Arrêtez le processus si le fichier n'existe pas
}

let configJson;
try {
  configJson = await import(configPath, { assert: { type: 'json' } });
} catch (error) {
  console.error(`Failed to load config.json from ${configPath}`);
  throw error;
}

const basename = path.basename(fileURLToPath(import.meta.url));
const env = process.env.NODE_ENV || 'development';
const config = configJson.default[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modelFiles = fs.readdirSync(__dirname).filter(file => {
  return (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  );
});

for (const file of modelFiles) {
  const modelPath = pathToFileURL(path.join(__dirname, file)).href;
  const { default: model } = await import(modelPath);
  const initializedModel = model(sequelize, DataTypes);
  db[initializedModel.name] = initializedModel;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Associations
db.Bar.hasMany(db.Order, { foreignKey: 'barId' });
db.Order.belongsTo(db.Bar, { foreignKey: 'barId' });
db.Beer.hasMany(db.Order, { foreignKey: 'beerId' });
db.Order.belongsTo(db.Beer, { foreignKey: 'beerId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
