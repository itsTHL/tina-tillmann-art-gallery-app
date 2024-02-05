import Image from "next/image";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
}) {
  return (
    <>
      <div>
        <Image src={image} height={height} width={width} alt="An art piece" />
        <p>{title}</p>
        <p>{artist}</p>
      </div>
    </>
  );
}
