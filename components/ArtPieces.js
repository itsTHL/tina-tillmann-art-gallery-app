import ArtPiecePreview from "@/components/ArtPiecePreview";
import Spotlight from "../components/Spotlight/Spotlight";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
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
