import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import CommentTitle from "./CommentTitle";
function Comment() {
  const [commentList, setCommentList] = React.useState([]);
  function addComment(comment) {
    setCommentList(commentList.concat(comment));
  }
  return (
    <div>
      {/* <div data-testid="comment-title">留言{commentList.length || ""}</div> */}
      <CommentTitle commentListLength={commentList.length} />
      <CommentForm addComment={addComment} />
      {/* <div data-testid="comment-list">
        {commentList.map((comment, idx) => {
          return <p key={idx}>{comment}</p>;
        })}
      </div> */}
      <CommentList commentList={commentList} />
    </div>
  );
}

export default Comment;
