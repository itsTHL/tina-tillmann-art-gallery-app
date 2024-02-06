import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          Spotlight
        </button>
        <button
          onClick={() => {
            router.push("/art-pieces");
          }}
        >
          Gallery
        </button>
        <button
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
