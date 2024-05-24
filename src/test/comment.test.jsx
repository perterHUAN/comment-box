import { it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import CommentTitle from "../components/Comment/CommentTitle";

it("应该有一个标明当前评论数量的标题", () => {
  render(<CommentTitle commentListLength={0} />);
  expect(screen.queryByTestId("number-of-comments")).not.toBeNull();
});
it("应该有一个排序的图标,hover的时候出现一个列表，包含两个列表单元，内容分别为最热评论和最新优先，图标旁边还有一段文字内容为排序", async () => {
  const user = userEvent.setup();
  render(<CommentTitle commentListLength={0} />);

  expect(screen.queryByText("排序")).not.toBeNull();

  const sortByIcon = screen.queryByTestId("sort-by-icon");
  expect(sortByIcon).not.toBeNull();
  expect(screen.queryByText("最热优先")).not.toBeVisible();
  expect(screen.queryByText("最新优先")).not.toBeVisible();
  await user.hover(sortByIcon);
  expect(screen.queryByText("最热优先")).toBeVisible();
  expect(screen.queryByText("最新优先")).toBeVisible();
});
