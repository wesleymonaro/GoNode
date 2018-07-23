module.exports = {
  signin(req, res) {
    return res.render('auth/signin');
  },
  signup(req, res) {
    return res.render('auth/signup');
  },
};
