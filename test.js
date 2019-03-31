const functions = require("../functions/Comment.functions");
test("get comment", async () => {
  expect.assertions(1);
  const response = await functions.getComments();
  expect(response.data.msg).toEqual("comment was recieved");
});
test("Create comment", async () => {
  expect.assertions(1);
  const response = await functions.CreateComments();
  expect(response.data.msg).toEqual("Comment was created successfully");
});
test("Update comment", async () => {
    expect.assertions(1);
    const response = await functions.UpdateComments();
    expect(response.data.msg).toEqual("Comment updated successfully");
  });
  test("Delete comment", async () => {
    expect.assertions(1);
    const response = await functions.DeleteComments();
    expect(response.data.msg).toEqual("Comment was deleted successfully");
  });
