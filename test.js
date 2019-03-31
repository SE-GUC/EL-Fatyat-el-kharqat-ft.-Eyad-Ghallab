const functions = require("./fn");


test('getting Payments', async () => {
  
  const allpayments =  await functions.getpayment();
  expect(allpayments.data.data.length).toBeGreaterThan(0);

});
test ("creating Payments",async () => {
  expect.assertions(2)
  const response= await functions.getpayment();
  const oldLength = response.data.data.length;  
  const response1 = await functions.createpayment({
          
        "Card_type": "debit",
        "Card_no": [57874312345],
        "Firstname": "Menna" ,
        "Lastname": "Atya",
        "Amount": [576000],
        "Email":"MennaHossam@gmail.com" ,
        "Phone_number":[106556645] ,
        "Street_Address":"abcg17street" ,
        "City": "Cairo",
        "State_Region":"Nasrcity" ,
        "Expire_date":"12/03/2020",
        "CVC":[234],
        "Country":"Egypt",
        "Postal_Zipcode":"12ddc2"   
        
    });
    expect(response1.data.msg).toEqual('Payment was created successfully')
      const response2 = await functions.getpayment();
    
      expect(response2.data.data.length).toEqual(oldLength + 1);
      
      },100000);
  


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