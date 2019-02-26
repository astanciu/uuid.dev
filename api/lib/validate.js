const { createError } = require('micro');
const allowedVersions = ['v1', 'v3', 'v4', 'v5']

module.exports = fn => {
  return (req, res) => {
    const version = (req.params.version || 'v4').toLowerCase();
    if (!allowedVersions.includes(version)){
      throw createError(400, `Unkown UUID version: ${version}`);
    }

    console.log(req.params)

    return fn(req, res)
  }
}