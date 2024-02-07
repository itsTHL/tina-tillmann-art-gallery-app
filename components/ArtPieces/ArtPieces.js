import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ data, artPiecesInfo, onToggleFavorite }) {
  return (
    <ul className="art-pieces-list">
      {data.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              slug={piece.slug}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
              artPiecesInfo={artPiecesInfo}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        );
      })}
    </ul>
  );
}
