import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <ArtPieces
        data={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
