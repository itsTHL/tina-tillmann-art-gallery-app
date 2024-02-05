import useSWR from "swr";

export default function ArtPieces({ pieces }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art");
  return <h1>Art pieces to come</h1>;
}
