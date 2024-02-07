import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
  colors,
}) {
  return (
    <ArtPieces
      data={data}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      colors={colors}
    />
  );
}
