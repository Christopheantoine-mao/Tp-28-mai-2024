const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    barId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER,
    date: DataTypes.DATE
  });
  return Order;
};

export default order;
