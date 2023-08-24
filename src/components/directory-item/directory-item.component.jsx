import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ directory: { imageUrl, title, route } }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={handleNavigate}>
      <BackgroundImage $imageSrc={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
