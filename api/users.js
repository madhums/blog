const User = require('../models/user');

module.exports = {
  load,
  create,
  show,
  update,
  remove
};

async function load(req, res, next, id) {
  req.user = await User.query().where('id', id);
  next();
}

async function create(req, res, next) {
  next(new Error('not implemented'));
}

async function show(req, res, next) {
  res.json(req.user);
}

async function update(req, res, next) {
  // just an example of maybe updating the user
  req.user.name = req.params.name;
  // save user ... etc
  res.json(req.user);
}

async function remove(req, res, next) {
  next(new Error('not implemented'));
}
