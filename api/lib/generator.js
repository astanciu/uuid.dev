const { createError } = require('micro');
const v1 = require('uuid/v1');
const v3 = require('uuid/v3');
const v4 = require('uuid/v4');
const v5 = require('uuid/v5');

module.exports = (version, name, namespace) => {
  console.log("VERSION: ", version)
  switch (version) {
    case 'v1':
      return v1();

    case 'v3':
      if (!name) {
        throw createError(500, `"name" query parameter is required`);
      }
      if (!namespace) {
        namespace = v4();
      }
      return v3(name, namespace);

    case 'v5':
      if (!name) {
        throw createError(500, `"name" query parameter is required`);
      }
      if (!namespace) {
        namespace = v4();
      }
      return v5(name, namespace);

    case 'v4':
    default:
      return v4();
  }
};
