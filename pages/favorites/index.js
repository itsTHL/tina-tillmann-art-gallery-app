import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      {pieces.length === 0 ? (
        <h1>Add your favorite pieces</h1>
      ) : (
        <ArtPieces
          data={pieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </>
  );
}
