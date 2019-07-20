const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');

  const eventFlyers = sequelizeClient.define('event_flyers', {
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    event_flyers_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'flyers',
        key: 'id'
      }
    }
  }, {
    tableName: 'event_event_flyers',
    underscored: true,
    timestamps: false
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  eventFlyers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

  };

  return eventFlyers;
};
