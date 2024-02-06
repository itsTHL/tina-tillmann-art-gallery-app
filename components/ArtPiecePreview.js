import Image from "next/image";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  height,
  width,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <div>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
        <Image src={image} height={height} width={width} alt="An art piece" />
        <p>{title}</p>
        <p>{artist}</p>
      </div>
    </>
  );
}
