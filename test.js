

const lawyer_funcs = require ('./fn');

test("Creating a lawyer", async()=>{
    expect.assertions(2);
    const response= await lawyer_funcs.getLawyers();
    const oldLength = response.data.data.length;
    const response1= await lawyer_funcs.CReateLawyer();
    const response2 = await lawyer_funcs.getLawyers();
    expect(response1.data.msg).toEqual('Lawyer was created successfully');
    expect(response2.data.data.length).toEqual(oldLength + 1);

});

 
test("Getting all lawyers", async () => {
    expect.assertions(1);
    const allLawyers = await lawyer_funcs.getLawyers()
    expect(allLawyers.data.data.length).toBeGreaterThan(0)
    
})
test("Getting unloced ssc", async () => {
    expect.assertions(1);
    const allssc = await funcs.getSSC()
    expect(allssc.data.data.length).toBeGreaterThan(0)

    //expect(allssc.data.data.Loceked).toEqual(false)
    
})
test("Getting unloced spc", async () => {
    expect.assertions(1);
    const allspc = await funcs.getSPC()
    //expect(allspc.data.data.Loceked).toEqual(false)
    expect(allspc.data.data.length).toBeGreaterThan(0)

    
})
test("Creating a contract then updating it", async ()=>{
    //   expect.assertions(2);
       //const response= await Inv_funcs.getInvestors();
      // const oldLength = response.data.data.length;  
       const created = await funcs.createLawyer({
        "username": "rawan220698",
        "password": "rawan222222",
        "fullname": "rawan essily",
        "email": "rawan@gmail.com",
        "phonenumber": "01122251595",
        "legaltype": "business",
        "birthdate": "6/22/1960",
        "noOfPreviousCases": 57,
        "gender": "female",
    });
        const updated =  {username: "rawanHossam"}
        const response1= await funcs.updateLawyer(created.data.data._id,updated)

             const allLawyer = await funcs.getlawyerbyid(created.data.data._id)
            //const response3= await Inv_funcs.getInvestors();
           // response3= await Inv_funcs.getInvestors();
          expect(allLawyer.data.data.username).toEqual("rawanHossam");
           expect(allLawyer.data.data.phonenumber).toEqual(created.data.data.phonenumber);

        // });
        
        },100000);
test("Creating an lawyer then deleting it", async ()=>{
    expect.assertions(1);
    const response= await funcs.getLawyer();
    const oldLength = response.data.data.length;  
    const response1 = await funcs.createLawyer({
        "username": "Hana",
        "password": "rawan222222",
        "fullname": "rawan essily",
        "email": "rawan@gmail.com",
        "phonenumber": "01122251595",
        "legaltype": "business",
        "birthdate": "6/22/1960",
        "noOfPreviousCases": 57,
        "gender": "female",});
    
    //expect(response1.data.msg).toEqual('investor was created successfully');
    //const response2 = await Inv_funcs.getInvestors();
    //expect(response2.data.data.length).toEqual(oldLength + 1);
    

    const response2= await funcs.deleteLawyer(
        response1.data.data._id);
        response3= await funcs.getLawyer();
        expect(response3.data.data.length).toEqual(oldLength);

    // });
    
    },100000);






        
