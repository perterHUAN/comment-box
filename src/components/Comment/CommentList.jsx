import Proptypes from "prop-types";
function CommentList({ commentList }) {
  return (
    <div data-testid="comment-list">
      {commentList.map((comment, idx) => {
        return <p key={idx}>{comment}</p>;
      })}
    </div>
  );
}
export default CommentList;

CommentList.propTypes = {
  commentList: Proptypes.array.isRequired,
};
