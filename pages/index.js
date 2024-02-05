import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ data }) {
  console.log("Data ---->", data);
  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight data={data} />
    </>
  );
}
