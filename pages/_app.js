import useSWR from "swr";
import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import "../components/Navigation/Navigation.css";
import "../components/ArtPieces/ArtPieces.css";
import "../components/ArtPieceDetails/ArtPieceDetails.css";
import "../components/FavoriteButton/FavoriteButton.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  // FETCHING DATA FROM API
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  // SETTING STATE FOR FAVORITE COMPONENT
  const [artPiecesInfo, setArtPiecesInfo] = useState({ isFavorite: false });
  console.log(artPiecesInfo);

  function toggleFavorite(artPieceSlug) {
    setArtPiecesInfo((artPiecesInfo) => {
      // finding correct art piece
      const artPiece = artPiecesInfo.find(
        (artPiece) => artPiece.slug === artPieceSlug
      );

      // if art piece is already in state, toggle isFavorite property
      if (artPiece) {
        return artPiecesInfo.map((artPiece) =>
          artPiece.slug === artPieceSlug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        );
      }

      // if art piece is not in state, add isFavorite key with value of true

      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} data={data} onToggle={toggleFavorite} />
      </Layout>
    </>
  );
}
