const funcs = require('./spcfn');


test ('Getting all forms' , async () => {
  expect.assertions(1);
  const form =  await funcs.getSpcForms()
  expect(form.data.data.length).toBeGreaterThan(0)

})
test('User Story', async () => {
    expect.assertions(1)
    const form1 =  await funcs.getUserStory()
    expect(form1.data.length).toBeGreaterThan(0)
  });

  test("Creating a Form", async ()=>{
    expect.assertions(2);
    const response= await funcs.getSpcForms();
    const oldLength = response.data.data.length;  
    const response1 = await funcs.createForm({
      "Facility_name": "aa",
      "Governorate": "cairo",
      "City": "Abnūb",
      "Facility_Address": "8 st hassanen abdel kader,Nasr city",
      "Facility_Phone_Number": "01289502264",
      "Fax": "2347859",
      "Capital_Currency": "Euro",
      "capital": 50000,
      "investorname": "Ashraf",
      "Gender": "Female",
      "Nationality": "Egyptian",
      "TypeOf_IdentityProof": "NationalID",
      "investor_nationalid": "29712310101728",
      "BirthDate": "1997-03-21T22:00:00.000Z",
      "Phone_Number": "01093654354",
      "Investor_Fax": "247852",
      "email": "hana@hotmail.com",
      "Investor_Address": "Madinaty B1",
      "Locked": "false",
      "Status": "rejected",
      "is_the_external_entities_notified": "true",});
    
    expect(response1.data.msg).toEqual('Form was created successfully');
    const response2 = await funcs.getSpcForms();

    expect(response2.data.data.length).toEqual(oldLength + 1);
    
    },100000);

  
  test("Creating then Deleting SPC Form", async () => {
    expect.assertions(1);
    const response = await funcs.getSpcForms();
    const oldLength = response.data.data.length;
    const response1 = await funcs.createForm({
           "Facility_name": "kk7",
            "Governorate": "cairo",
            "City": "Abnūb",
            "Facility_Address": "8 st hassanen abdel kader,Nasr city",
            "Facility_Phone_Number": "01289502264",
            "Fax": "2347859",
            "Capital_Currency": "Euro",
            "capital": 60000,
            "investorname": "Ashraf",
            "Gender": "Female",
            "Nationality": "Egyptian",
            "TypeOf_IdentityProof": "NationalID",
            "investor_nationalid": "29712310101728",
            "BirthDate": "1997-03-21T22:00:00.000Z",
            "Phone_Number": "01093654354",
            "Investor_Fax": "247852",
            "email": "hana@hotmail.com",
            "Investor_Address": "Madinaty B1",
            "Locked": "false",
            "Status": "accepted",
            "is_the_external_entities_notified": "true",
    });
    console.log("hi");
    console.log(response1.data.data._id);
    const response2 = await funcs.deleteForm(
     response1.data.data._id);
     response3 = await funcs.getSpcForms();
    expect(response3.data.data.length).toEqual(oldLength);
  });
  // test("Creating then Updating SPC Form", async () => {
  //   expect.assertions(2);
  
  //   const created = await funcs.createForm({
  //          "Facility_name": "mama mia 5",
  //           "Governorate": "cairo",
  //           "City": "Abnūb",
  //           "Facility_Address": "8 st hassanen abdel kader,Nasr city",
  //           "Facility_Phone_Number": "01289502264",
  //           "Fax": "2347859",
  //           "Capital_Currency": "Euro",
  //           "capital": 60000,
  //           "investorname": "Ashraf",
  //           "Gender": "Female",
  //           "Nationality": "Egyptian",
  //           "TypeOf_IdentityProof": "NationalID",
  //           "investor_nationalid": "29712310101728",
  //           "BirthDate": "1997-03-21T22:00:00.000Z",
  //           "Phone_Number": "01093654354",
  //           "Investor_Fax": "247852",
  //           "email": "hana@hotmail.com",
  //           "Investor_Address": "Madinaty B1",
  //           "Locked": "false",
  //           "Status": "accepted",
  //           "is_the_external_entities_notified": "true",
  //   });
  //   console.log("hi 2");
  //   console.log(created.data.data._id);
  //   const response1 = await funcs.updateForm(
  //     created.data.data._id);
  //     response3 = await funcs.getSpcForms(); 
  //   expect(response1.data.data.email).toEqual("Ashraf@hotmail.com");
  //   expect(response1.data.data.Facility_name).toEqual(created.data.data.Facility_name);
  // });
