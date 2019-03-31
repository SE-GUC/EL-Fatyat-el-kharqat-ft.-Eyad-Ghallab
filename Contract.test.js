
const Contract_funcs = require('./Contract_funcs');

test("Getting all contracts", async () => {
    expect.assertions(1);
    const allContracts = await Contract_funcs.getContracts()
    expect(allContracts.data.data.length).toBeGreaterThan(0)
    
})

test("Creating a contract", async ()=>{
    expect.assertions(2);
    const response= await Contract_funcs.getContracts();
    const oldLength = response.data.data.length;  
    const response1 = await Contract_funcs.createContract({
        "First_party_name": "zefta",
        "Second_party_name": "bbb",
        "First_party_address": "aaa",
        "Second_party_address": "sssss",
        "Day": "7",
        "Month": "12",
        "Year": "12",
        "Time": "1/2/2002",
        "Corporate_name": "Aaaa",
        "Corporate_governorate": "Domiat",
        "Corporate_city": "Abnūb",
        "Corporate_address": "aaaa",
        "Corporate_Phone_Number": "aaa",
        "Investor_name": "aaa",
        "Investor_address": "aann",
        "Investor_ID": "ss",
        "Investor_nationality": "Albanian",
        "Investor_DOB": "2/2/1992",
        "Investor_phone_number": "Aaa",
        "Investor_Fax": "Aaaa",
        "Investor_email": "aaaaaa",
        "Main_business_activity": "aaa",
        "Other_activities": "aaaa",
        "Duration_of_the_company": "111",
        "Initial_capital": "500000",
        "Capital_Currency": "Malagasy ariary",
        "Status": "Sent",
        "Type_of_form": "SPC"});
    
    expect(response1.data.msg).toEqual('Contract was created successfully');
    const response2 = await Contract_funcs.getContracts();

    expect(response2.data.data.length).toEqual(oldLength + 1);
    
    },100000);


    test("Updating contract", async () => {
        expect.assertions(1);
        const contract = await Contract_funcs.updateContract();
        expect(response.data.msg).toEqual("Contract was created successfully")
    }
    )



    // test("Creating a contract then updating it", async ()=>{
    //     expect.assertions(2);
    //     //const response= await Inv_funcs.getInvestors();
    //    // const oldLength = response.data.data.length;  
    //     const created = await Contract_funcs.createContract({
    //         "First_party_name": "zefta",
    //         "Second_party_name": "bbb",
    //         "First_party_address": "aaa",
    //         "Second_party_address": "sssss",
    //         "Day": "7",
    //         "Month": "12",
    //         "Year": "12",
    //         "Time": "1/2/2002",
    //         "Corporate_name": "Aaaa",
    //         "Corporate_governorate": "Domiat",
    //         "Corporate_city": "Abnūb",
    //         "Corporate_address": "aaaa",
    //         "Corporate_Phone_Number": "aaa",
    //         "Investor_name": "aaa",
    //         "Investor_address": "aann",
    //         "Investor_ID": "ss",
    //         "Investor_nationality": "Albanian",
    //         "Investor_DOB": "2/2/1992",
    //         "Investor_phone_number": "Aaa",
    //         "Investor_Fax": "Aaaa",
    //         "Investor_email": "aaaaaa",
    //         "Main_business_activity": "aaa",
    //         "Other_activities": "aaaa",
    //         "Duration_of_the_company": "111",
    //         "Initial_capital": "600000",
    //         "Capital_Currency": "Malagasy ariary",
    //         "Status": "Sent",
    //         "Type_of_form": "SPC"});
        
    //     const response1= await Inv_funcs.updateInvestor(created.data.data._id, {"Initial_capital" : "600000 Hossam"})
            
    //         //const response3= await Inv_funcs.getInvestors();
    //        // response3= await Inv_funcs.getInvestors();
    //         expect(response1.data.data.Initial_capital).toEqual("600000");
    //         expect(response1.data.data.Status).toEqual(response1.data.data.Status);

    //     // });
        
    //     },100000);




    test("Creating a contract then deleting it", async ()=>{
        expect.assertions(1);
        const response= await Contract_funcs.getContracts();
        const oldLength = response.data.data.length;  
        const response1 = await Contract_funcs.createContract({
            "First_party_name": "zefta",
            "Second_party_name": "bbb",
            "First_party_address": "aaa",
            "Second_party_address": "sssss",
            "Day": "7",
            "Month": "12",
            "Year": "12",
            "Time": "1/2/2002",
            "Corporate_name": "Aaaa",
            "Corporate_governorate": "Domiat",
            "Corporate_city": "Abnūb",
            "Corporate_address": "aaaa",
            "Corporate_Phone_Number": "aaa",
            "Investor_name": "aaa",
            "Investor_address": "aann",
            "Investor_ID": "ss",
            "Investor_nationality": "Albanian",
            "Investor_DOB": "2/2/1992",
            "Investor_phone_number": "Aaa",
            "Investor_Fax": "Aaaa",
            "Investor_email": "aaaaaa",
            "Main_business_activity": "aaa",
            "Other_activities": "aaaa",
            "Duration_of_the_company": "111",
            "Initial_capital": "500000",
            "Capital_Currency": "Malagasy ariary",
            "Status": "Sent",
            "Type_of_form": "SPC"});

        const response2= await Contract_funcs.DeleteContract(
            response1.data.data._id);
            response3= await Contract_funcs.getContracts();
            expect(response3.data.data.length).toEqual(oldLength);
        
        },100000);



   
   

    
    
    
      


