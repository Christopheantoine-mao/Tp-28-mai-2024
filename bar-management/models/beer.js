const beer = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  });
  return Beer;
};

export default beer;
