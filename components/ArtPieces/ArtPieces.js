import ArtPiecePreview from "@/components/ArtPiecePreview";

<<<<<<< HEAD
export default function ArtPieces({ data, onToggleFavorite, isFavorite }) {
=======
export default function ArtPieces({ data, artPiecesInfo, onToggleFavorite }) {
>>>>>>> main
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
