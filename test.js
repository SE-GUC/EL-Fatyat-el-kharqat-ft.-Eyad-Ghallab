const functions = require('./fn');

test("Getting all reviewers", async () => {
    expect.assertions(1);
    const allReviewers = await functions.getReviewer();
    expect(allReviewers.data.msg).toEqual("these are the reviewers");
    
});






  test ("creating Reviewers",async () => {
    const response= await functions.getReviewer();
    const oldLength = response.data.data.length;  
    const response1 = await functions.createReviewer({
        "Name":"MennaHossam",
        "Email":"MennaHossam127@gmail.com",
        "Username":"Menna",
       " Password": "12345",
        "YearsOfExperience": "412",
        "Gender": "Female"

      })
      expect(response1.data.msg).toEqual('Reviewer was created successfully')
      const response2 = await functions.getReviewer();
    
      expect(response2.data.data.length).toEqual(oldLength + 1);
      
      },100000);


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