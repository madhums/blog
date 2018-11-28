const User = require('../models/user');

module.exports = {
  load,
  create,
  list,
  show,
  update,
  remove
};

async function load(req, res, next, id) {
  req.user = await User.query().findOne('id', id);
  next();
}

async function create(req, res, next) {
  next(new Error('not implemented'));
}

async function list(req, res, next) {
  const users = await User.query();
  res.json(users);
}

async function show(req, res, next) {
  res.json(req.user);
}

async function update(req, res, next) {
  next(new Error('not implemented'));
}

async function remove(req, res, next) {
  next(new Error('not implemented'));
}
