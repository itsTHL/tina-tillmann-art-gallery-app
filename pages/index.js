import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ data, isFavorite, onToggleFavorite }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight
        data={data}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
