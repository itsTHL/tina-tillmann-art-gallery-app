import Image from "next/image";
import "./ArtPieceDetails.css";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <section className="art-piece-details">
        <Image src={image} alt="" width="" height="" />
        <div className="details-container">
          <h3>Title: {title}</h3>
          <h3>Artist: {artist}</h3>
          <h3>Year: {year}</h3>
          <h3>Genre: {genre}</h3>
        </div>
      </section>
    </>
  );
}
