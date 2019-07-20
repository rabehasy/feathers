// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const flyers = sequelizeClient.define('flyers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    crdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    hidden: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    ismain: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'event_flyers',
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
  flyers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    const { event } = models;
    flyers.belongsToMany(event, {
      through: 'event_event_flyers',
      foreignKey: 'event_flyers_id'
    });

  };

  return flyers;
};
