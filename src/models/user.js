const Base = require('./base');

class User extends Base {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
