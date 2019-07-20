// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const sequelize = context.app.get('sequelizeClient');
    const {
      date
    } = sequelize.models;
    context.params.sequelize = {
      include: [
        { model: date },
        'date_home'
      ],
      raw: false,
    };

    return context;
  };
};
