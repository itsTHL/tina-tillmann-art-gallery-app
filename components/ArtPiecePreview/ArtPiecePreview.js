import Image from "next/image";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
}) {
  return (
    <div className="art-piece-preview__container">
      <Image
        src={image}
        height={height}
        width={width}
        alt={`${title} by ${artist}`}
        className="art-piece-preview__img"
      />
      <span className="art-piece-preview__title">{title}</span>
      <span className="art-piece-preview__artist">{artist}</span>
    </div>
  );
}
