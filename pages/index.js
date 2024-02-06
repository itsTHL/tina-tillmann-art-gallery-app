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

// // function Movies() {
// //   /* let's assume the API return a list of movies like this:
// //     [
// //       {
// //         id: 1,
// //         title: "Star Wars",
// //         year: 1977,
// //       },
// //       {
// //         id: 2,
// //         title: "The Empire Strikes Back",
// //         year: 1980,
// //       }
// //     ]
// //   */
// //   const { data: moviesData } = useSWR("/api/movies");

// //   // initialize the local state with an empty array
// //   const [moviesInfo, setMoviesInfo] = useState([]);

// //   function handleToggleFavorite(id) {
// //     setMoviesInfo((moviesInfo) => {
// //       // find the movie in the state
// //       const info = moviesInfo.find((info) => info.id === id);

// //       // if the movie is already in the state, toggle the isFavorite property
// //       if (info) {
// //         return moviesInfo.map((info) =>
// //           info.id === id ? { ...info, isFavorite: !info.isFavorite } : info
// //         );
// //       }

// //       // if the movie is not in the state, add it with isFavorite set to true
// //       return [...moviesInfo, { id, isFavorite: true }];
// //     });
// //   }

// //   return (
// //     <ul>
// //       {moviesData.map(({ id, title, year }) => {
// //         // find the movie in the state and destructure the isFavorite property
// //         // if it is not in the state, default isFavorite to false
// //         const { isFavorite } = moviesInfo.find((info) => info.id === id) ?? {
// //           isFavorite: false,
// //         };

// //         return (
// //           <li key={id}>
// //             {title} ({year})
// //             <button type="button" onClick={handleToggleFavorite(id)}>
// //               {isFavorite ? "Remove from favorites" : "Add to favorites"}
// //             </button>
// //           </li>
// //         );
// //       })}
// //     </ul>
// //   );
// }
