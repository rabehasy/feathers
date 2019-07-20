// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const sequelize = context.app.get('sequelizeClient');
    const {
      entree,
      api,
      flyers,
      lieu,
      thematique,
      artistes,
      date,
      common_event
    } = sequelize.models;
    context.params.sequelize = {
      include: [
        { model: entree },
        { model: api },
        { model: flyers },
        { model: lieu },
        { model: thematique },
        { model: artistes },
        { model: date },
        { model: common_event },
        'eventRelated'

      ],
      raw: false,
    };

    return context;
  };
};
