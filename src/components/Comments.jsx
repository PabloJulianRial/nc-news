export function Comments({ comments }) {
    return (
      <div>
  
      <h4>Comments for article: {comments[0].article_id}</h4>
      <section className="comments">
        {comments.map((comment) => {
          return <div className='single-comment'key={comment.comment_id}>
            <p>Comment posted by: {comment.author} on {comment.created_at.slice(0, 10)}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            </div>;
        })}
      </section>
      </div>
    );
  }
  