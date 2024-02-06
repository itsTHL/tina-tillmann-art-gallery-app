import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import "../components/Navigation/Navigation.css";
import "../components/ArtPieces/ArtPieces.css";
import "../components/ArtPieceDetails/ArtPieceDetails.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  // adds data from comments to artPieceInfo-State
  function handleAddComment(comment) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const time = (comment.date = date);
    // setEntries([newEntry, ...entries]);
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
        />
      </Layout>
    </>
  );
}
