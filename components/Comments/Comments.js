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
    if (!commentsArray) {
      return (
        <div className="comments-container">
          <h1>Be the first to comment</h1>
        </div>
      );
    }
    // Now you can work with the 'commentsArray'
    console.log("the comments array destructured:", commentsArray);

    // const commentsJSON = JSON.stringify(commentsArray);
    // console.log("strigyfied: ", commentsJSON);
    return (
      <>
        <div className="comments-container">
          <h1>Comments</h1>
          {/* Iterate over the 'commentsArray' array */}
          {commentsArray.map((commentObj, index) => (
            <div className="comment-container" key={index}>
              <p className="datetime-stamp">
                date: {JSON.parse(JSON.stringify(commentObj.date))} / time:
                {JSON.parse(JSON.stringify(commentObj.time))}
              </p>
              <p>{JSON.parse(JSON.stringify(commentObj.comment))}</p>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    // Handle the case when 'comments' is empty or not an array
    console.log("Comments are empty or not in the expected format");
    return (
      <div className="comments-container">
        <h3>Be the first to comment</h3>
      </div>
    );
  }
}
