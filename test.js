const functions = require("../functions/payment.functions");
test("update payment", async()=>{
    expect.assertions(1);
    const response = await functions.UpdatePayment();
    expect(response.data.msg).toEqual("Payment is updated successfully");
});

//5c9fa97cf853175cc446dd29
test("Delete Payment",async()=>{
    expect.assertions(1);
    const response = await functions.Deletepayment();
    expect(response.data.msg).toEqual("payment was deleted successfully");
});
    