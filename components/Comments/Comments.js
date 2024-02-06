// import CommentForm from "../CommentForm";

//   // onSubmitComment={handleAddComment}

// export default function Comments({onSubmitComments}) {

//     console.log("comments to respective artPiece: ", comments);

//   return (
//     <>
//       <ul className="entrylist">
//         {entries?.map((entry, index) => (
//           <>
//             <Entry entry={entry} />
//             {index !== EntryForm.length - 1 && <Divider />}
//           </>
//         ))}
//       </ul>
//     </>
//   );
// }

//   ;
// }

// Acceptance Criteria

//     The detail view has a list of comments for this art piece with the headline "Comments" 🖼️
//     Each comment's text is displayed 🖼️
//     Each comment's date and time is displayed 🖼️
//     The detail view has an input field to write a comment 🖼️
//     The detail view has a submit button labeled "Send" 🖼️
//     After submitting the form, the comment is appended to the list of comments 🖼️

// Tasks

//     Store comments per art piece in the artPiecesInfo state
//     Create a CommentForm component
//     CommentForm props: onSubmitComment
//     Create a Comments components
//     Comments props: comments
//     All acceptance criteria marked with 🖼️ are covered by component testing
