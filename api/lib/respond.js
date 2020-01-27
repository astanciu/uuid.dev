const { send } = require('micro');

module.exports = (req, res, uuid) => {
  const contentType = (req.headers['accept'] || '').toLowerCase();
  switch (contentType) {
    case 'application/json':
      send(res, 200, { uuid });
      break;

    case 'text/xml':
    case 'application/xml':
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<uuid>${uuid}</uuid>`;
      send(res, 200, xml);
      break;

    case 'text/plain':
    default:
      send(res, 200, uuid);
  }
};
