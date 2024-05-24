import React from "react";
import Proptypes from "prop-types";
function CommentForm({ addComment }) {
  const [comment, setComment] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    addComment(comment);
    setComment("");
  }
  function handleChange(event) {
    setComment(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="添加一条评论"
        value={comment}
        onChange={handleChange}
      />
      <button>提交</button>
    </form>
  );
}
CommentForm.propTypes = {
  addComment: Proptypes.func.isRequired,
};
export default CommentForm;
