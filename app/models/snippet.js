module.exports = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });

  Snippet.associate = (models) => {
    Snippet.belongsTo(models.Category);
  };

  return Snippet;
};
