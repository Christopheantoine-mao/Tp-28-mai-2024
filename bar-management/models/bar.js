const bar = (sequelize, DataTypes) => {
  const Bar = sequelize.define('Bar', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  });
  return Bar;
};

export default bar;
