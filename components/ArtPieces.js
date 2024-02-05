import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ data }) {
  return (
    <ul>
      {data.map((piece) => (
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
