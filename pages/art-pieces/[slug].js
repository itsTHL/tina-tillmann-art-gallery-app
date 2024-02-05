import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import useRouter from "next/router";

export default function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);

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

  const { image, title, artist, year, genre } = currentArtPiece;

  return (
    <>
      <ArtPieceDetails
        image={image}
        title={title}
        artist={artist}
        year={year}
        genre={genre}
      />
      <Link href="">Back to the art gallery</Link>
    </>
  );
}
