import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import React, { useState, useEffect } from "react";

export default function Spotlight({
  data,
  onToggleFavorite,
  artPiecesInfo,
  slug,
}) {
  const [randomIndex, setRandomIndex] = useState(null);
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const min = 0;
      const max = data.length;
      const newIndex = getRandomArbitrary(min, max);
      setRandomIndex(newIndex);
      setRandomPiece(data[newIndex]);
    }
  }, [data]);

  function getRandomArbitrary(min, max) {
    const randomIndex = Math.random() * (max - min) + min;
    return Math.floor(randomIndex);
  }

  if (!randomPiece) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="spotlight__container">
        <FavoriteButton
          slug={randomPiece.slug}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
          className="spotlight__fav-btn"
        />
        <Link href={`/art-pieces/${randomPiece.slug}`}>
          <Image
            src={randomPiece.imageSource}
            alt={`${randomPiece.genre} with title${randomPiece.name}`}
            height={randomPiece.dimensions.height}
            width={randomPiece.dimensions.width}
            className="spotlight__image"
          />
        </Link>
        <p>{randomPiece.artist}</p>
      </div>
    </>
  );
}
