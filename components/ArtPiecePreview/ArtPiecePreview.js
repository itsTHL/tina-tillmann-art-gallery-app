import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  height,
  width,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <div className="art-piece-preview__container">
        <FavoriteButton
          onToggleFavorite={() => onToggleFavorite(slug)}
          artPiecesInfo={artPiecesInfo}
        />
        <Link href={`/art-pieces/${slug}`}>
          <Image
            src={image}
            height={height}
            width={width}
            alt={`${title} by ${artist}`}
            className="art-piece-preview__img"
          />
          <div className="art-piece-preview__inner-container">
            <span className="art-piece-preview__title">{title}</span>
            <span className="art-piece-preview__artist">{artist}</span>
          </div>
        </Link>
      </div>
    </>
  );
}
