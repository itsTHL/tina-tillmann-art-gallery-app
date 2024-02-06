import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritesPage({ artPiecesInfo, pieces }) {
  const piecess = artPiecesInfo.filter(
    (artPieceObj) => artPieceObj.isFavorite === true
  );
  console.log("pieces: ", piecess);
  return (
    <>
      <ArtPieces pieces={pieces} />;
    </>
  );
}
