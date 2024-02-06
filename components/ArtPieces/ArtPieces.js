import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ data, artPiecesInfo, onToggleFavorite }) {
  console.log(artPiecesInfo);
  return (
    <ul className="art-pieces-list">
      {data.map((piece) => {
        const { isFavorite } = artPiecesInfo.find(
          (artPiece) => artPiece.slug === piece.slug
        ) ?? { isFavorite: false };

        return (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
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
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
