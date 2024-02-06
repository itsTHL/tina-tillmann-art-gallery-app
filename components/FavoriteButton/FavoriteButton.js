import EmptyStar from "../../resources/assets/star_empty.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      isFavorite={isFavorite}
      onClick={onToggleFavorite}
      className="fav-btn"
    >
      <EmptyStar />
    </button>
  );
}
