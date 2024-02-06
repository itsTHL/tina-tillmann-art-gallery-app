import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <ArtPieces
      data={data}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
    />
  );
}
