import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/");
          }}
        >
          Spotlight
        </button>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/art-pieces");
          }}
        >
          Gallery
        </button>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/favorites");
          }}
        >
          Favorites
        </button>
      </nav>
    </>
  );
}
