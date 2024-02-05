import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";

export default function Homepage({ pieces }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight />
      <ArtPieces pieces={data} />
    </>
  );
}
