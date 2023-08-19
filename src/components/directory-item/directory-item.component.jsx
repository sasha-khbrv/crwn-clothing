import "./directory-item.styles.scss";

const DirectoryItem = ({ directory: { id, imageUrl, title } }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
