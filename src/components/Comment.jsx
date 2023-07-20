export function Comment({ comment }) {
  return (
    <div>
      <h2>Comments </h2>
      <div className="single-comment" key={comment.comment_id}>
        <p className="label">Posted by </p>
        <span>{comment.author}</span>
        <p className="label">on </p>
        <span>{comment.created_at.slice(0, 10)}</span>

        <p>{comment.body}</p>
        <p className="label">Votes </p>
        <span>{comment.votes}</span>
      </div>
    </div>
  );
}
