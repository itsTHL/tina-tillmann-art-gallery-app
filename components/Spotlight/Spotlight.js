import Image from "next/image";
import useSWR from "swr";

export default function Spotlight() {
  // reusable data hook of swr
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <h1>failed to load</h1>;
  if (isLoading || !data) return <h1>loading...</h1>;

  // Guard against data being null or not an array
  if (!Array.isArray(data) || data.length === 0) {
    return <h1>No data available</h1>;
  }

  //One art piece is picked at random to show as a spotlight piece
  // picked by random index of imported array "pieces"

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
