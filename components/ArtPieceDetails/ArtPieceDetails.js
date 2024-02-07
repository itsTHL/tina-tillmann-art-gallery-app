import Image from "next/image";
import { useRouter } from "next/router";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ColorPalette from "../ColorPalette/ColorPalette";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onSubmitComment,
  slug,
  onToggleFavorite,
  artPiecesInfo,
  colors,
}) {
  const router = useRouter();

  return (
    <>
      <section className="art-piece-details__section">
        <ColorPalette colors={colors} />
        <Image
          src={image}
          alt={`${title} by ${artist}`}
          width="300"
          height="600"
          className="details-page__img"
        />
        <div className="details-container">
          <FavoriteButton
            slug={slug}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={() => onToggleFavorite(slug)}
          />
          <h3>Title: {title}</h3>
          <h3>Artist: {artist}</h3>
          <h3>Year: {year}</h3>
          <h3>Genre: {genre}</h3>
        </div>
      </section>
      <section className="button__section">
        <button
          className="details-page__btn"
          type="button"
          onClick={() => {
            router.push("/art-pieces");
          }}
        >
          Back to the art gallery
        </button>
      </section>
      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
      <Comments artPiecesInfo={artPiecesInfo} />
    </>
  );
}
