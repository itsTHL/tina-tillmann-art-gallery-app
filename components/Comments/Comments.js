import { useRouter } from "next/router";

export default function Comments({ artPiecesInfo }) {
  const router = useRouter();
  const routerSlug = router.query.slug; // Accessing slug from router.query
  console.log("Router ---> ", routerSlug);

  // Filtering artPieceInfos based on the slug from the router
  const comments = artPiecesInfo.filter(
    (comment) => comment.slug === routerSlug
  );
  console.log("comments as an array?", comments);
  if (comments && Array.isArray(comments) && comments.length > 0) {
    // Destructure 'comments' to directly access the 'comments' array
    const [{ comments: commentsArray }] = comments;

    // Now you can work with the 'commentsArray'
    console.log("the comments array destructured:", commentsArray);

    // const commentsJSON = JSON.stringify(commentsArray);
    // console.log("strigyfied: ", commentsJSON);
    return (
      <>
        <div>
          <h1>Comments</h1>
          {/* Iterate over the 'commentsArray' array */}
          {commentsArray.map((commentObj, index) => (
            <div key={index}>
              <p>Comment: {JSON.stringify(commentObj.comment)}</p>
              <p>date: {JSON.stringify(commentObj.date)}</p>
              <p>date: {JSON.stringify(commentObj.time)}</p>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    // Handle the case when 'comments' is empty or not an array
    console.log("Comments are empty or not in the expected format");
    return <h1>Be the first to comment</h1>;
  }
}

//     if (commentsArray.length > 0) {
//       return (
//         <div>
//           {/* Iterate over the 'commentsArray' array */}
//           {commentsArray.map((commentObj, index) => (
//             <div key={index}>
//               <h2>Slug: {commentObj.slug}</h2>
//               {/* Iterate over the 'comments' array within each 'commentObj' */}
//               {commentObj.comments.map((comment, innerIndex) => (
//                 <div key={innerIndex}>
//                   <p>Comment: {comment}</p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       );
//     }
// }

//     return (
//       <>
//         <h1>COMMENTS</h1>
//         {comments.map((comment, index) => (
//           <div key={index}>
//             <h1>{comment.date}</h1>
//             <p>{comment.comment}</p>
//           </div>
//         ))}
//       </>
//     );
//   } else {
//     return null;
//   }
