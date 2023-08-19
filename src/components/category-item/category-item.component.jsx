import "./category-item.styles.scss";

const CategoryItem = ({ category: { id, imageUrl, title } }) => {
  return (
    <div className="category-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
