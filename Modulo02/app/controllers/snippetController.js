const { Snippet, Category } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { categoryId } = req.params;

      const snippet = await Snippet.create(
        {
          ...req.body,
          CategoryId: categoryId,
        },
      );

      req.flash('suceess', 'Snippet criado com sucesso');

      return res.redirect(`/app/categories/${categoryId}/snippets/${snippet.id}`);
    } catch (error) {
      return next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { categoryId, id } = req.params;

      const categories = await Category.findAll({
        include: [Snippet],
        where: {
          UserId: req.session.user.id,
        },
      });

      const snippets = await Snippet.findAll({
        where: { CategoryId: categoryId },
      });

      const snippet = await Snippet.findById(id);

      return res.render('snippets/show', {
        currentSnippet: snippet,
        categories,
        snippets,
        activeCategory: categoryId,
      });
    } catch (error) {
      return next(error);
    }
  },
  async update(req, res, next) {
    try {
      const snippet = await Snippet.findById(req.params.id);

      await snippet.update(req.body);

      req.flash('success', 'Snippet atualizado com sucesso');

      return res.redirect(`/app/categories/${req.params.categoryId}/snippets/${snippet.id}`);
    } catch (error) {
      return next(error);
    }
  },
  async destroy(req, res, next) {
    try {
      await Snippet.destroy({ where: { id: req.params.id } });

      req.flash('success', 'Snippet deletado com sucesso');

      return res.redirect(`/app/categories/${req.params.categoryId}`);
    } catch (error) {
      return next(error);
    }
  },

};
