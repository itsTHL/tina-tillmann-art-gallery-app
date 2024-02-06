import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPieceDetailPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = data.find((artPiece) => artPiece.slug === slug);

  if (!currentArtPiece) {
    return (
      <>
        <h1>
          This piece does not exist. ... yet! Do you want to change that? 🎨
        </h1>
        <Link href="">Back to the art gallery</Link>
      </>
    );
  }

  const { imageSource, name, artist, year, genre } = currentArtPiece;

  return (
    <>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </>
  );
}
