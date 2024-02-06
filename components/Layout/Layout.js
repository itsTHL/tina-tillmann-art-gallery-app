import Navigation from "../Navigation/Navigation";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <div>
        <Navigation />
        <div>{children}</div>
      </div>
    </>
  );
}
