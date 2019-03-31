

const funcs = require('./fn');
test("Getting all forms", async () => {
    expect.assertions(1);
    const allforms = await funcs.getForms()
    expect(allforms.data.data.length).toBeGreaterThan(0)
    
})







test("getting Form",async()=>{
    expect.assertions(1);
    const response=await funcs.getForms();
    expect(response.data.msg).toEqual("here is the form")
  
   
});


test("Creating a form", async ()=>{
    expect.assertions(2);
    const response= await funcs.getForms();
    const oldLength = response.data.data.length;  
    const response1 = await funcs.createForm({
        "Company_name": "Pastriaholic",
        "Governorate": "Alex",
        "City": "Abnūb",
       "Company_Address": "8 st hassanen abdel kader,Nasr city",
       "Company_Phone_Number": "01289502264",
        "Fax": "2347859",
        "Capital_Currency": "Euro",
        "capital": 60000,
        "investorname": "Hana Hicham",
        "Investor_type": "Person",
       "Gender": "Female",
       "Nationality": "Egyptian",
       "TypeOf_IdentityProof":"NationalID",
        "investor_nationalid": "29712310101728",
        "BirthDate":"3/22/1997",
        "Address": "Madinaty B1",
        "Phone_Number": "01093654354",
        "email": "hana@hotmail.com",
        "BOD_Name": "soso",
        "BOD_Investor_Type": "Person",
        "BOD_Gender": "Female",
        "BOD_Nationality":" Afghan ",
        "BOD_TypeOfIdentityProof": "NationalID",
        "BOD_NationalID": "29712310101734",
        "BOD_BirthDate": "2/06/1997",
        "BOD_Address": "new cairo",
        "PositionInBOD": "Vice President",
        "Formdate":"2/22/2019",
        "Lock":"true"
    })
    
    expect(response1.data.msg).toEqual('Form was created successfully');
    const response2 = await funcs.getForms();

    expect(response2.data.data.length).toEqual(oldLength + 1);
    
    },100000);

//     // test("Creating a form then updating it", async ()=>{
//     //     expect.assertions(2);
//     //     const created = await Inv_funcs.createInvestor({
//     //         "Company_name": "The Pastry shop",
//     //         "Governorate": "Alex",
//     //         "City": "Abnūb",
//     //        "Company_Address": "8 st hassanen abdel kader,Nasr city",
//     //        "Company_Phone_Number": "01289502264",
//     //         "Fax": "2347859",
//     //         "Capital_Currency": "Euro",
//     //         "capital": 60000,
//     //         "investorname": "Hana Hicham",
//     //         "Investor_type": "Person",
//     //        "Gender": "Female",
//     //        "Nationality": "Egyptian",
//     //        "TypeOf_IdentityProof":"NationalID",
//     //         "investor_nationalid": "29712310101728",
//     //         "BirthDate":"3/22/1997",
//     //         "Address": "Madinaty B1",
//     //         "Phone_Number": "01093654354",
//     //         "email": "hana@hotmail.com",
//     //         "BOD_Name": "soso",
//     //         "BOD_Investor_Type": "Person",
//     //         "BOD_Gender": "Female",
//     //         "BOD_Nationality":" Afghan ",
//     //         "BOD_TypeOfIdentityProof": "NationalID",
//     //         "BOD_NationalID": "29712310101734",
//     //         "BOD_BirthDate": "2/06/1997",
//     //         "BOD_Address": "new cairo",
//     //         "PositionInBOD": "Vice President",
//     //         "Formdate":"2/22/2019",
//     //         "Lock":"true"   
//     //     });
        

//     //     const response1= await funcs.updateForm(created.data.data._id, {"Company_name" : "The pastry shop"})




        
//     //         expect(response1.data.data.name).toEqual("Hana Hossam");
//     //         expect(response1.data.data.email).toEqual(response1.data.data.email);
        
//     //     },100000);



    test("Creating an form then deleting it", async ()=>{
        expect.assertions(1);
        const response= await funcs.getForms();
        const oldLength = response.data.data.length;  
        const response1 = await funcs.createForm({
       "Company_name": "Pastriaholic",
        "Governorate": "Alex",
        "City": "Abnūb",
       "Company_Address": "8 st hassanen abdel kader,Nasr city",
       "Company_Phone_Number": "01289502264",
        "Fax": "2347859",
        "Capital_Currency": "Euro",
        "capital": 60000,
        "investorname": "Hana Hicham",
        "Investor_type": "Person",
       "Gender": "Female",
       "Nationality": "Egyptian",
       "TypeOf_IdentityProof":"NationalID",
        "investor_nationalid": "29712310101728",
        "BirthDate":"3/22/1997",
        "Address": "Madinaty B1",
        "Phone_Number": "01093654354",
        "email": "hana@hotmail.com",
        "BOD_Name": "soso",
        "BOD_Investor_Type": "Person",
        "BOD_Gender": "Female",
        "BOD_Nationality":" Afghan ",
        "BOD_TypeOfIdentityProof": "NationalID",
        "BOD_NationalID": "29712310101734",
        "BOD_BirthDate": "2/06/1997",
        "BOD_Address": "new cairo",
        "PositionInBOD": "Vice President",
        "Formdate":"2/22/2019",
        "Lock":"true"
        })
        

        const response2= await funcs.deleteForm(
            response1.data.data._id);
            response3= await funcs.getForms();
            expect(response3.data.data.length).toEqual(oldLength);
        },100000);


//         // test(" Updating the form ",async ()=>{
//         //     expect.assertions(1);
//         //     const response= await funcs.updateForm();
               
//         //         expect(response.data.msg ).toEqual("Form is updated successfully");
//         // })
test("Creating a form then updating it", async ()=>{
           
    const created = await funcs.createForm({
     Company_name: "Pastriaholic",
Governorate: "Alex",
City: "Abnūb",
Company_Address: "8 st hassanen abdel kader,Nasr city",
Company_Phone_Number: "01289502264",
Fax: "2347859",
Capital_Currency: "Euro",
capital: 60000,
investorname: "Hana Hicham",
Investor_type: "Person",
Gender: "Female",
Nationality: "Egyptian",
TypeOf_IdentityProof:"NationalID",
investor_nationalid: "29712310101728",
BirthDate:"3/22/1997",
Address: "Madinaty B1",
Phone_Number: "01093654354",
email: "hana@hotmail.com",
BOD_Name: "soso",
BOD_Investor_Type: "Person",
BOD_Gender: "Female",
BOD_Nationality:" Afghan ",
BOD_TypeOfIdentityProof: "NationalID",
BOD_NationalID: "29712310101734",
BOD_BirthDate: "2/06/1997",
BOD_Address: "new cairo",
PositionInBOD: "Vice President",
Formdate:"2/22/2019",
Lock:"true"
})
    const updated =  {Company_name: "Hossam Inc"}
    const response1= await funcs.updateForm(created.data.data._id,updated)

         const allforms = await funcs.getFormsbyid(created.data.data._id)
        //const response3= await Inv_funcs.getInvestors();
       // response3= await Inv_funcs.getInvestors();
      expect(allforms.data.data.Company_name).toEqual("Hossam Inc");
       expect(allforms.data.data.Status).toEqual(created.data.data.Status);

    // });
    
    },100000);

