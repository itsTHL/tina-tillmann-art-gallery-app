import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ data }) {
  return (
    <ul className="art-pieces-list">
      {data.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
