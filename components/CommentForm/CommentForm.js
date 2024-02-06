export default function CommentForm({ onSubmitComment }) {
  function handleSubmitComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dataObject = { comment: data.comment };
    onSubmitComment(dataObject);
    console.log(dataObject);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmitComment}>
      <label htmlFor="comment">Comment</label>
      <textarea type="text" rows="5" cols="33" id="comment" name="comment" />
      <button type="submit">Send</button>
    </form>
  );
}

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
