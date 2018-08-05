const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet');

module.exports = {
  async create(req, res, next) {
    try {
      const tweet = await Tweet.create({ ...req.body, user: req.userId });

      return res.json(tweet);
    } catch (error) {
      return next(error);
    }
  },
  async destroy(req, res, next) {
    try {
      await Tweet.findByIdAndRemove(req.params.id);

      return res.send();
    } catch (error) {
      return next(error);
    }
  },

};
