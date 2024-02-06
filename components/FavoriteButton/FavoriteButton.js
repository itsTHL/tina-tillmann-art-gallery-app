// import EmptyStar from "../../resources/assets/star_empty.png";
import Image from "next/image";

export default function FavoriteButton() {
  return (
    <>
      <button type="button">
        <Image src="/star_empty.png" alt="empty star" width="50" height="50" />
      </button>
    </>
  );
}
