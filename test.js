const functions = require("../functions/reviewer.functions");
test("update Reviewer", async()=>{
    expect.assertions(1);
    const response = await functions.UpdateReviewer();
    expect(response.data.msg).toEqual("reviewer updated successfully");
});
test("Delete reviwer",async()=>{
    expect.assertions(1);
    const response = await functions.DeleteReviewer();
    expect(response.data.msg).toEqual("reviewer was deleted successfully");
});