

const lawyer_funcs = require ('./fn');

test("Creating a lawyer", async()=>{
    expect.assertions(2);
    const response= await lawyer_funcs.getLawyers();
    const oldLength = response.data.data.length;
    const response1= await lawyer_funcs.createLawyer();
    const response2 = await lawyer_funcs.getLawyers();
    expect(response1.data.msg).toEqual('Lawyer was created successfully');
    expect(response2.data.data.length).toEqual(oldLength + 1);

});

 
test("Getting all lawyers", async () => {
    expect.assertions(1);
    const allLawyers = await lawyer_funcs.getLawyers()
    expect(allLawyers.data.data.length).toBeGreaterThan(0)
    
})






        
