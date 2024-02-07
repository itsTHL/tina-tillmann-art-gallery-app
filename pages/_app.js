import useSWR from "swr";
import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import "../components/Navigation/Navigation.css";
import "../components/ArtPieces/ArtPieces.css";
import "../components/ArtPieceDetails/ArtPieceDetails.css";
import "../components/FavoriteButton/FavoriteButton.css";
import "../components/Comments/Comments.css";
import "../components/CommentForm/CommentForm.css";
import "../components/ColorPalette/ColorPalette.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  // FETCHING DATA FROM API
  //
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  // SETTING STATE FOR FAVORITE COMPONENT
  //
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  console.log("state: ", artPiecesInfo);

  // TOGGLE FAVORITE
  // toggles isFavorite property and favorite icon when favorite button is clicked
  //
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

  // FILTER FAVORITES
  //
  const filteredArtPiecesInfo = artPiecesInfo.filter(
    (artPieceInfoObj) => artPieceInfoObj.isFavorite === true
  );
  console.log("filtered for is fav: ", filteredArtPiecesInfo);

  const pieces = filteredArtPiecesInfo.map((filteredArtPieces) =>
    data.find((dataObj) => dataObj.slug === filteredArtPieces.slug)
  );
  console.log("pieces: ", pieces);

  // COLOR PALETTE
  //

  //COMMENTS
  // adds data from comments to artPieceInfo-State
  //
  function handleAddComment(comment, slug) {
    // adds date and time
    const now = new Date();
    const dateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const timeOptions = {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    };

    const formattedDate = now.toLocaleDateString("en-us", dateOptions);
    const formattedTime = now.toLocaleTimeString("en-us", timeOptions);

    comment.date = formattedDate;
    comment.time = formattedTime;

    console.log("The initial array -----> ", artPiecesInfo);

    // Find the art piece corresponding to the provided slug
    const artPiece = artPiecesInfo.find(
      (artPieceObj) => artPieceObj.slug === slug
    );

    // If art piece exists, update its comments. Otherwise, create a new art piece object.

    if (artPiece) {
      setArtPiecesInfo((prevArtPiecesInfo) =>
        prevArtPiecesInfo.map((artPieceInfo) =>
          artPieceInfo.slug === slug
            ? {
                ...artPieceInfo,
                comments: artPieceInfo.comments
                  ? [comment, ...artPieceInfo.comments]
                  : [comment],
              }
            : artPieceInfo
        )
      );
    } else {
      // Create a new art piece object with the provided slug and add the comment to it
      const newArtPiece = { slug: slug, comments: [comment] };

      // Update the state by adding the new art piece object to the existing artPiecesInfo array
      setArtPiecesInfo((prevArtPiecesInfo) => [
        ...prevArtPiecesInfo,
        newArtPiece,
      ]);
    }

    console.log("my data for comments: ", comment, slug);
  }

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          data={data}
          onSubmitComment={handleAddComment}
          artPiecesInfo={artPiecesInfo}
          pieces={pieces}
          onToggleFavorite={toggleFavorite}
        />
      </Layout>
    </>
  );
}
