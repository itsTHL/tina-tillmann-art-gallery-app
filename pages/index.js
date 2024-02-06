import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({
  data,
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
