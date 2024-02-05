import ArtPiecePreview from "@/components/ArtPiecePreview";
import "./ArtPieces.css";

export default function ArtPieces({ pieces }) {
  return (
    <ul className="art-pieces-list">
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.title}
            artist={piece.artist}
            height={piece.dimensions.height}
            width={piece.dimensions.width}
          />
        </li>
      ))}
    </ul>
  );
}
