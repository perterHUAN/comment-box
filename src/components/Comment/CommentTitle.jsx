import Proptypes from "prop-types";
import { MdSort } from "react-icons/md";
function CommentTitle({ commentListLength }) {
  return (
    <div
      data-testid="comment-title"
      className="flex flex-row items-center gap-6 mb-20 "
    >
      <span data-testid="number-of-comments">
        留言{commentListLength || ""}
      </span>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-row items-center relative cursor-pointer">
          <div className="self-start text-lg peer" data-testid="sort-by-icon">
            <MdSort />
          </div>
          <ul className="peer-hover:block hidden absolute rounded  whitespace-pre top-6 left-1/2 -translate-x-1/2 p-2">
            <li>最热优先</li>
            <li>最新优先</li>
          </ul>
        </div>
        <div data-testid="sort-text">排序</div>
      </div>
    </div>
  );
}
CommentTitle.propTypes = {
  commentListLength: Proptypes.number.isRequired,
};

export default CommentTitle;
