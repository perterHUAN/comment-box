import { test, expect } from "@playwright/test";

const PROJECT_URL = "http://localhost:5173";
test.describe("comment box", () => {
  test("应该可以添加评论，并且新添加的评论显示在评论区", async ({ page }) => {
    await page.goto(PROJECT_URL);

    // 初始评论区为空
    await expect(page.getByTestId("number-of-comments")).toHaveText("留言");

    // 添加评论
    const comment = "你好，世界";
    await page.getByPlaceholder("添加一条评论").fill(comment);
    await page.getByRole("button", { name: "提交" }).click();

    // 添加评论之后
    // 留言区多了一条刚刚添加的评论
    await expect(page.getByTestId("number-of-comments")).toHaveText("留言1");
    await expect(page.getByTestId("comment-list")).toContainText(comment);
  });
});
