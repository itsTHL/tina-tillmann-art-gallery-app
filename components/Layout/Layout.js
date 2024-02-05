import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navigation />
        <div>{children}</div>
      </div>
    </>
  );
}
