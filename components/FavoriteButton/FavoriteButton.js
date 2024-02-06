// import EmptyStar from "../../resources/assets/star_empty.png";
import Image from "next/image";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <>
      <button
        type="button"
        className="fav-btn"
        slug={slug}
        onClick={onToggleFavorite}
      >
        {isFavorite ? (
          <Image
            src="/star_empty.png"
            alt="empty star"
            width="50"
            height="50"
          />
        ) : (
          <Image
            src="/star_filled.png"
            alt="empty star"
            width="50"
            height="50"
          />
        )}
      </button>
    </>
  );
}
