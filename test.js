
const Inv_funcs = require('./fn');

test("Getting all investors", async () => {
    expect.assertions(1);
    const allInvestors = await Inv_funcs.getInvestors()
    expect(allInvestors.data.data.length).toBeGreaterThan(0)
    
},100000)

test("Creating an investor", async ()=>{
    expect.assertions(2);
    const response= await Inv_funcs.getInvestors();
    const oldLength = response.data.data.length;  
    const response1 = await Inv_funcs.createInvestor({
        "name" : "Farah Hossam",
        "email": "farah@gmail.com",
        "username": "FarahRashed",
        "password":"1258",
        "nationality":"Egyptain",
        "gender":"Female",
        "birthdate":"1/1/2002",   
        "city":"Cairo",
        "country":"Egypt",
        "jobtitle":"Doctor",
        "mobilenumber":"01235698748"});
    
    expect(response1.data.msg).toEqual('investor was created successfully');
    const response2 = await Inv_funcs.getInvestors();

    expect(response2.data.data.length).toEqual(oldLength + 1);
    
    },100000);


    test("Creating a investor then updating it", async ()=>{
        //   expect.assertions(2);
           //const response= await Inv_funcs.getInvestors();
          // const oldLength = response.data.data.length;  
           const created = await Inv_funcs.createInvestor({
            name: "Farah Hossam",
            email: "farah@gmail.com",
            username: "FarahRashed",
            password:"1258",
            nationality:"Egyptain",
            gender:"Female",
            birthdate:"1/1/2002",   
            city:"Cairo",
            country:"Egypt",
            jobtitle:"Doctor",
            mobilenumber:"01235698748"
              })
           const updated =  {name: "a3tmad"}
           const response1= await Inv_funcs.updateInvestor(created.data.data._id,updated)
   
                const allContracts = await Inv_funcs.getInvestorbyid(created.data.data._id)
               //const response3= await Inv_funcs.getInvestors();
              // response3= await Inv_funcs.getInvestors();
             expect(allContracts.data.data.name).toEqual("a3tmad");
              expect(allContracts.data.data.gender).toEqual(created.data.data.gender);
   
           // });
           
           },100000);
   
   








    test("Creating an investor then deleting it", async ()=>{
        expect.assertions(1);
        const response= await Inv_funcs.getInvestors();
        const oldLength = response.data.data.length;  
        const response1 = await Inv_funcs.createInvestor({
            "name" : "AAAAAAAAA",
            "email": "farah@gmail.com",
            "username": "FarahRashed",
            "password":"1258",
            "nationality":"Egyptain",
            "gender":"Female",
            "birthdate":"1/1/2002",   
            "city":"Cairo",
            "country":"Egypt",
            "jobtitle":"Doctor",
            "mobilenumber":"01235698748"});

        const response2= await Inv_funcs.DeleteInvestor(
            response1.data.data._id);
            response3= await Inv_funcs.getInvestors();
            expect(response3.data.data.length).toEqual(oldLength);
        
        },100000);



   
   

    
    
    
      


