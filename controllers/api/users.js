const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  createNoPic
};

async function create(req, res) {
  try {
    const url = await User.savePhoto(req)
    const locationObj = { "latitude" : req.body.latitude, "longitude" : req.body.longitude }
    const newObj = {...req.body}
    delete newObj.latitude
    delete newObj.longitude
    const user = await User.create({...newObj, location: locationObj, profilepic: url});
    const token = createJWT(user);
    res.json(token);
  } catch(err) {
    res.status(400).json(err);
  }
}

async function createNoPic(req, res) {
  try {
    const user = await User.create(req.body);
    console.log('here')
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOneAndUpdate({ email: req.body.email }, {location: req.body.location});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

/*--- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}