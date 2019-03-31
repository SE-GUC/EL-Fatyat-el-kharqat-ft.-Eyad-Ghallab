const functions = require("./fn");
test("update payment", async()=>{
    expect.assertions(1);
    const response = await functions.UpdatePayment();
    expect(response.data.msg).toEqual("payment updated successfully");
});
test("Delete payment",async()=>{
    expect.assertions(1);
    const response = await functions.Deletepayment();
    expect(response.data.msg).toEqual("payment was deleted successfully");
});