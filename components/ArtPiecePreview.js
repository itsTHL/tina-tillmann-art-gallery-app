import Image from "next/image";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
}) {
  return (
    <>
      <div>
        <FavoriteButton />
        <Image src={image} height={height} width={width} alt="An art piece" />
        <p>{title}</p>
        <p>{artist}</p>
      </div>
    </>
  );
}
