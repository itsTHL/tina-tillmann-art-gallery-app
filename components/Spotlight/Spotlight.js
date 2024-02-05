import Image from "next/image";
import useSWR from "swr";

export default function Spotlight({ data }) {
  if (!data) {
    return <h1>Loading...</h1>;
  }

  const min = 0;
  const max = data.length;

  function getRandomArbitrary(min, max) {
    const randomIndex = Math.random() * (max - min) + min;
    return Math.floor(randomIndex);
  }
  const randomIndex = getRandomArbitrary(min, max);
  const randomPiece = data[randomIndex];

  // The art piece image is displayed 🖼️
  // The art piece artist is displayed 🖼️

  return (
    <>
      <Image
        src={randomPiece.imageSource}
        alt={`${randomPiece.genre} with title${randomPiece.name}`}
        height={randomPiece.dimensions.height}
        width={randomPiece.dimensions.width}
      />
      <p>{randomPiece.artist}</p>
    </>
  );
}
