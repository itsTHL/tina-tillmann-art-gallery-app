import Image from "next/image";
import pieces from "../pages/[slug].js";

export default function Spotlight({ image, artist }) {
  //One art piece is picked at random to show as a spotlight piece
  // picked by random index of imported array "pieces"

  const min = 0;
  const max = pieces.length;

  function getRandomArbitrary(min, max) {
    const randomIndex = Math.random() * (max - min) + min;
    return Math.floor(randomIndex);
  }
  const randomIndex = getRandomArbitrary(min, max);
  const randomPiece = pieces[randomIndex];

  // The art piece image is displayed 🖼️
  // The art piece artist is displayed 🖼️

  return (
    <>
      <Image
        src={randomPiece.imageSource}
        alt={`${randomPiece.genre} with title${randomPiece.name}`}
      />
      <p>{randomPiece.artist}</p>
    </>
  );
}
