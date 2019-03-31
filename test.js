

const funcs = require ('./fn');


test("Creating a lawyer", async()=>{
    expect.assertions(2);
    const response= await funcs.getLawyers();
    const oldLength = response.data.data.length;
    const response1= await funcs.CReateLawyer();
    const response2 = await funcs.getLawyers();
    expect(response1.data.msg).toEqual('Lawyer was created successfully');
    expect(response2.data.data.length).toEqual(oldLength + 1);

});

 
test("Getting all lawyers", async () => {
    expect.assertions(1);
    const allLawyers = await funcs.getLawyers()
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
      "Facility_name": "araf7",
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
      "Status": "accepted",
      "is_the_external_entities_notified": "true",});
    
    expect(response1.data.msg).toEqual('Form was created successfully');
    const response2 = await funcs.getSpcForms();

    expect(response2.data.data.length).toEqual(oldLength + 1);
    
    });

  
  test("Creating then Deleting SPC Form", async () => {
    expect.assertions(1);
    const response = await funcs.getSpcForms();
    const oldLength = response.data.data.length;
    const response1 = await funcs.createForm({
           "Facility_name": "kzz17",
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
  // test("Creating a form then updating it", async ()=>{
  //   expect.assertions(2)
  //      const created = await funcs.createForm({
  //       "Facility_name": "lala",
  //       "Governorate": "cairo",
  //       "City": "Abnūb",
  //       "Facility_Address": "8 st hassanen abdel kader,Nasr city",
  //       "Facility_Phone_Number": "01289502264",
  //       "Fax": "2347859",
  //       "Capital_Currency": "Euro",
  //       "capital": 60000,
  //       "investorname": "Ashraf",
  //       "Gender": "Female",
  //       "Nationality": "Egyptian",
  //       "TypeOf_IdentityProof": "NationalID",
  //       "investor_nationalid": "29712310101728",
  //       "BirthDate": "1997-03-21T22:00:00.000Z",
  //       "Phone_Number": "01093654354",
  //       "Investor_Fax": "247852",
  //       "email": "hana@hotmail.com",
  //       "Investor_Address": "Madinaty B1",
  //       "Locked": "false",
  //       "Status": "accepted",
  //       "is_the_external_entities_notified": "true",})
  //      const updated =  {"Facility_name": "lala"}
  //      const response1= await funcs.updateForm(created.data.data._id,updated)

  //           const allForms = await funcs.getFormbyid(created.data.data._id)
    
  //        expect(allForms.data.data.Facility_name).toEqual("lala");
  //         expect(allForms.data.data.Status).toEqual(created.data.data.Status);

       
       
  //      });


test("get Notification", async () => {
  expect.assertions(1);
  const response = await funcs.getNotification();
  expect(response.data.msg).toEqual("this is the notifications");
});

test("Create Notification", async () => {
  expect.assertions(2);
  const response = await funcs.getNotification();
  const oldlength = response.data.data.length;
  const response1 = await funcs.CreateNotification();
  const response2 = await funcs.getNotification();
  expect(response1.data.msg).toEqual("notification was created successfully");
  expect(response2.data.data.length).toEqual(oldlength + 1 )
});
test("get Notification By ID", async () => {
  expect.assertions(1);
  const response = await funcs.getNotificationByID();
  expect(response.data.msg).toEqual("Notification was recieved");
});

  test("update notification", async()=>{
    expect.assertions(1);
    const response = await funcs.UpdateNotifications();
    expect(response.data.msg).toEqual("notification updated successfully");
});
test("Delete notification",async()=>{
    expect.assertions(1);
    const response = await funcs.DeleteNotification();
    expect(response.data.msg).toEqual("notification was deleted successfully");
});


test('getting Payments', async () => {
  
  const allpayments =  await funcs.getpayment();
  expect(allpayments.data.data.length).toBeGreaterThan(0);

});
test ("creating Payments",async () => {
  expect.assertions(2)
  const response= await funcs.getpayment();
  const oldLength = response.data.data.length;  
  const response1 = await funcs.createpayment({
          
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
      const response2 = await funcs.getpayment();

test("Getting all reviewers", async () => {
    expect.assertions(1);
    const allReviewers = await funcs.getReviewer();
    expect(allReviewers.data.msg).toEqual("these are the reviewers");
    
});


const funcs = require('./fn');
test("Getting all forms", async () => {
    expect.assertions(1);
    const allforms = await funcs.getForms()
    expect(allforms.data.data.length).toBeGreaterThan(0)
    
})







  test ("creating Reviewers",async () => {
    const response= await funcs.getReviewer();
    const oldLength = response.data.data.length;  
    const response1 = await funcs.createReviewer({
        "Name":"MennaHossam",
        "Email":"MennaHossam127@gmail.com",
        "Username":"Menna",
       " Password": "12345",
        "YearsOfExperience": "412",
        "Gender": "Female"

      })
      expect(response1.data.msg).toEqual('Reviewer was created successfully')
      const response2 = await funcs.getReviewer();

    
      expect(response2.data.data.length).toEqual(oldLength + 1);
      
      },100000);


test("update payment", async()=>{
    expect.assertions(1);
    const response = await funcs.UpdatePayment();
    expect(response.data.msg).toEqual("payment updated successfully");
});
test("Delete payment",async()=>{
    expect.assertions(1);
    const response = await funcs.Deletepayment();
    expect(response.data.msg).toEqual("payment was deleted successfully");
});



test("update Reviewer", async()=>{
    expect.assertions(1);
    const response = await funcs.UpdateReviewer();
    expect(response.data.msg).toEqual("reviewer updated successfully");
});
test("Delete reviwer",async()=>{
    expect.assertions(1);
    const response = await funcs.DeleteReviewer();
    expect(response.data.msg).toEqual("reviewer was deleted successfully");
});


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
});

test('get External Entity', async () => {
  const Entity =  await funcs.GetEntity();
  expect(Entity.data.data.length).toBeGreaterThan(0);
});

test('post  External Entity', async () => {
  const Entity =  await funcs.GetEntity();
  const oldlength = Entity.data.data.length;
  const response1 = await funcs.PostEntity({
    "name":"Mary",
    "username":"ammar_ah",
    "password":"ahumkcnsjkabjhbssnaknsdk",
  })
expect(response1.data.msg).toEqual("Entity was created successfully");
const response2 = await funcs.GetEntity();
expect(response2.data.data.length).toEqual(oldlength +1);
});

test(' update External Entity', async () => {
    const EntityUpdated = await funcs.PutEntity();
    expect(EntityUpdated.data.msg).toEqual("Entity updated successfully") 
});

test(' Delete External Entity', async () => {
  const EntityDeleted = await funcs.DeleteEntity();
  expect(EntityDeleted.data.msg).toEqual("Entity Deleted successfully")
});

test("get admin", async () => {
  expect.assertions(1);
  const response = await funcs.getAdmins();
  expect(response.data.data.length).toBeGreaterThan(0);
});
  test("Create Admin", async () => {
    expect.assertions(2);
    const response = await funcs.getAdmins();
    const oldlength = response.data.data.length;
    const response1 = await funcs.CreateAdmins(
     { "id":"23",
      "name":"sarahhh"  ,
      "email":"ayhaga@hotmail.com",
      "address":"asdasda",
      "username":"sarashh",
      "password":"56789"
    }
    );
    expect(response1.data.msg).toEqual("Admin was created successfully");
    const response2 = await funcs.getAdmins();
    expect(response2.data.data.length).toEqual(oldlength +1);
  });
  
  test("Update Admin", async () => {
      expect.assertions(1);
      const response = await funcs.UpdateAdmins();
      expect(response.data.msg).toEqual("Admin updated successfully");
    });
    test("Delete Admin", async () => {
      expect.assertions(1);
      const response = await funcs.DeleteAdmins();
      expect(response.data.msg).toEqual("Admin was deleted successfully");
    });

test("get comment", async () => {
  expect.assertions(1);
  const response = await funcs.getComments();
  expect(response.data.msg).toEqual("comment was recieved");
});
test("Create comment", async () => {
  expect.assertions(1);
  const response = await funcs.CreateComments();
  expect(response.data.msg).toEqual("Comment was created successfully");
});
test("Update comment", async () => {
    expect.assertions(1);
    const response = await funcs.UpdateComments();
    expect(response.data.msg).toEqual("Comment updated successfully");
  });
  test("Delete comment", async () => {
    expect.assertions(1);
    const response = await funcs.DeleteComments();
    expect(response.data.msg).toEqual("Comment was deleted successfully");
  });


test("Getting all investors", async () => {
    expect.assertions(1);
    const allInvestors = await funcs.getInvestors()
    expect(allInvestors.data.data.length).toBeGreaterThan(0)
    
},100000)

test("Creating an investor", async ()=>{
    expect.assertions(2);
    const response= await funcs.getInvestors();
    const oldLength = response.data.data.length;  
    const response1 = await funcs.createInvestor({
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
    const response2 = await funcs.getInvestors();

    expect(response2.data.data.length).toEqual(oldLength + 1);
    
    },100000);



    test("Creating a investor then updating it", async ()=>{
        //   expect.assertions(2);
           //const response= await Inv_funcs.getInvestors();
          // const oldLength = response.data.data.length;  
           const created = await funcs.createInvestor({
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
           const response1= await funcs.updateInvestor(created.data.data._id,updated)
   
                const allContracts = await funcs.getInvestorbyid(created.data.data._id)
               //const response3= await Inv_funcs.getInvestors();
              // response3= await Inv_funcs.getInvestors();
             expect(allContracts.data.data.name).toEqual("a3tmad");
              expect(allContracts.data.data.gender).toEqual(created.data.data.gender);
   
           // });
           
           },100000);
   
   

        


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




    test("Creating an investor then deleting it", async ()=>{
        expect.assertions(1);
        const response= await funcs.getInvestors();
        const oldLength = response.data.data.length;  
        const response1 = await funcs.createInvestor({
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

        const response2= await funcs.DeleteInvestor(
            response1.data.data._id);
            response3= await funcs.getInvestors();
            expect(response3.data.data.length).toEqual(oldLength);
        
        },100000);



   
   

    
    
    


