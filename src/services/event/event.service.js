// Initializes the `event` service on path `/api/event`
const createService = require('feathers-sequelize');
const createModel = require('../../models/event.model');
const hooks = require('./event.hooks');

const multer = require('multer');
const slugify = require('voca/slugify');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'public/uploads'), // where the files are being stored
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`) // getting the file name
});
const upload = multer({
  storage,
  limits: {
    fieldSize: 100 // Max field value size `MB`
  }
});

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: true // allowing us to store multiple instances of the model, in the same request
  };

  // Initialize our service with any options it requires
  app.use(
    '/api/event',
    // upload.array('files'),
    upload.single('files'),
    (req, _res, next) => {
    const { method } = req;
    if (method === 'POST' || method === 'PATCH') {
      // req.feathers.files = req.files; // transfer the received files to feathers
      req.feathers.files = req.file; // transfer the received files to feathers
      // for transforming the request to the model shape
      // console.log(req);
      // const body = [];
      const body = {
        name: req.body.name,
        flyer:  req.file.filename ,
        slug: slugify(req.body.name),
        position: 200
      };
      /*for (const file of req.files)
        body.push({
          name: req.body.name,
          flyer: file.originalname
        });*/
      // req.body = method === 'POST' ? body : body[0];
      req.body = body ;
    }
    next();
  }, createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/event');

  service.hooks(hooks);
};
