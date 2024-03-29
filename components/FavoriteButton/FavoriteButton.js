import Image from "next/image";

export default function FavoriteButton({
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const artPiece = artPiecesInfo.find((artPiece) => artPiece.slug === slug) ?? {
    isFavorite: false,
  };
  const isFavorite = artPiece.isFavorite;

  return (
    <>
      <button
        type="button"
        className="fav-btn"
        slug={slug}
        onClick={() => onToggleFavorite(slug)}
      >
        {isFavorite ? (
          <Image
            src="/star_filled.png"
            alt="filled star icon"
            width="50"
            height="50"
          />
        ) : (
          <Image
            src="/star_empty.png"
            alt="empty star icon"
            width="50"
            height="50"
          />
        )}
      </button>
    </>
  );
}
