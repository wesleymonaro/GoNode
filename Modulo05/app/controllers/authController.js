const mongoose = require('mongoose');
const sendMail = require('../services/mailer');

const User = mongoose.model('User');

module.exports = {
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      if (!await user.compareHash(password)) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      return res.json({ user, token: user.generateToken() });
    } catch (error) {
      return next(error);
    }
  },
  async signup(req, res, next) {
    try {
      const { email, username } = req.body;

      if (await User.findOne({ $or: [{ email }, { username }] })) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const user = await User.create(req.body);

      await sendMail({
        from: 'Wesley Monaro <wesley@onnze.com>',
        to: user.email,
        subeject: `Bem-vindo ao RocketTwitter, ${user.name}`,
        html: 'Seja bem-vindo ao RocketTwitter, faça login com sua conta.',
        template: 'auth/register',
        context: {
          name: user.name,
          username: user.username,
        },
      });

      return res.json({ user, token: user.generateToken() });
    } catch (error) {
      return next(error);
    }
  },
};
