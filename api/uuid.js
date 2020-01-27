const microCors = require('micro-cors');
const cors = microCors({ allowMethods: ['GET'], origin: '*' });
const { router, get } = require('microrouter');

const generate = require('./lib/generator');
const validate = require('./lib/validate');
const respond = require('./lib/respond');

const api = async (req, res) => {
  const { version } = req.params;
  const { name, namespace } = req.query;

  const uuid = generate(version, name, namespace);
  respond(req, res, uuid);
};

const routes = router(
  get('/api/:version', validate(api)),
  get('/api', validate(api))
);

module.exports = cors(routes);
