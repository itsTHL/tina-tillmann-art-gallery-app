import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
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
    </>
  );
}
