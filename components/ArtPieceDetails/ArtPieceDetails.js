import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  const router = useRouter();
  console.log(isFavorite);
  return (
    <>
      <section className="art-piece-details">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(slug)}
        />
        <Image
          src={image}
          alt={`${title} by ${artist}`}
          width="300"
          height="300"
        />
        <div className="details-container">
          <h3>Title: {title}</h3>
          <h3>Artist: {artist}</h3>
          <h3>Year: {year}</h3>
          <h3>Genre: {genre}</h3>
        </div>
      </section>
      <section className="button-section">
        <button
          type="button"
          onClick={() => {
            router.push("/art-pieces");
          }}
        >
          Back to the art gallery
        </button>
      </section>
    </>
  );
}
