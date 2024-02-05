import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </>
  );
}
