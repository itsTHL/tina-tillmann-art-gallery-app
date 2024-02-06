import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  height,
  width,
  isFavorite,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <div>
        <FavoriteButton
          onToggleFavorite={() => onToggleFavorite(slug)}
          artPiecesInfo={artPiecesInfo}
        />
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} height={height} width={width} alt="An art piece" />
        </Link>
        <p>{title}</p>
        <p>{artist}</p>
      </div>
    </>
  );
}
