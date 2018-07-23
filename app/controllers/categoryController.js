const { Category } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const category = await Category.create(
        {
          ...req.body,
          UserId: req.session.user.id,
        },
      );

      req.flash('suceess', 'Categoria criada com sucesso');

      return res.redirect(`/app/categories/${category.id}`);
    } catch (error) {
      return next(error);
    }
  },
};
