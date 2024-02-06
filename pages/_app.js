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
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  console.log("state: ", artPiecesInfo);

  const isFavorite = artPiecesInfo.find(
    (artPiece) => artPiece.slug === artPiece.slug
  ) ?? { isFavorite: false };

  function toggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      //
      // finding correct art piece
      const artPiece = artPiecesInfo.find((artPiece) => artPiece.slug === slug);

      // if art piece is already in state, toggle isFavorite property
      if (artPiece) {
        return artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        );
      }

      // if art piece is not in state, add isFavorite key with value of true
      return [...artPiecesInfo, { slug: slug, isFavorite: true }];
    });
  }

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  // adds data from comments to artPieceInfo-State
  function handleAddComment(comment) {

// adds date and time
    const now = new Date();
const dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
const timeOptions = {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
};

const formattedDate = now.toLocaleDateString("en-us", dateOptions);
const formattedTime = now.toLocaleTimeString("en-us", timeOptions);

    comment.date = formattedDate;
    comment.time = formattedTime; 
  // sets state
    setArtPieceInfo(
// finds artPiece which is commented by slug
      artPiecesInfo.find((artPieceInfo) =>
      artPieceInfo.slug === slug
        ? {
            ...artPieceInfo,
            comments: [
              ...comment,
          ]
          }
        : artPieceInfo
    )
  );
    console.log(comment);
    
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          data={data}
          onSubmitComment={handleAddComment}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      </Layout>
    </>
  );
}
