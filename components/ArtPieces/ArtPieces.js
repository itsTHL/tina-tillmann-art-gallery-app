import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({
  data,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <ul className="art-pieces-list">
      {data.map((piece) => {
        // const { isFavorite } = artPiecesInfo.find(
        //   (artPiece) => artPiece.slug === piece.slug
        // ) ?? { isFavorite: false };

        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              slug={piece.slug}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        );
      })}
    </ul>
  );
}
