const express = require('express');
const app = express();

const Readspc = [
   {  id:'1',
   Facility_name: "Pastriaholic", 
   Governorate:'Cairo', 
   City: 'Cairo', 
   Facility_Address: '8 st hassanen abdel kader,Nasr city',
   Facility_Phone_Number: '01289502264',
   Fax: '2347859', 
   Capital_Currency: 'United states dollar',
   capital: 2851.2 , 
   investorname: "Hana Hicham",
   Gender:'Female', 
   Nationality:'Egyptian',  
   TypeOf_IdentityProof:'National ID', 
   investor_nationalid: '29712310101728', 
   BirthDate:'31/12/1997', 
   Phone_Number:'01093654354', 
   Investor_Fax:'274589',
   email:'hana@hotmail.com',
   Investor_Address : 'Madinaty',
   },
   { id:'2', 
   Facility_name: "LirtenHub", 
   Governorate: 'Alexandria', 
   City: 'Borg el arab', 
   Facility_Address: '10st mostafa kamel',
   Facility_Phone_Number: '01548974563',
   Fax: '125896', 
   Capital_Currency: 'Egyptian pound',
   capital: 51000 , 
   investorname: "Sama Zidan", 
   Gender:'Female', 
   Nationality:'Egyptian', 
   TypeOf_IdentityProof:'National ID', 
   investor_nationalid: '29811280101625',
   BirthDate:'28/11/1998', 
   Phone_Number:'01158963472', 
   Investor_Fax:'274589'
   ,email:'sama@hotmail.com', 
   Investor_Address : 'obourcity',
   },
   { id:'3',
   Facility_name: "Wuzzuf",  
   Governorate: 'Cairo', 
   City: 'Cairo', 
   Facility_Address: 'Tahrir sq',
   Facility_Phone_Number: '01548974563',
   Fax: '125896', 
   Capital_Currency: 'Egyptian pound',
   capital: 52000 , 
   investorname: "Rawan Esseily",
   Gender:'Female', 
   Nationality:'American', 
   TypeOf_IdentityProof:'Passport', 
   investor_nationalid: '29806220101724',
   BirthDate:'2/06/1998', 
   Phone_Number:'01274578541',
   Investor_Fax:'357891', 
   email:'rawan@gmail.com',
   Investor_Address : 'sheroukcity', 
   },

];


app.get('/', (request, response) => {
    response.send(`<h1>Welcome to the form</h1>,
    <a href="/api/Readspc">SPC Forms</a>`);
});
//console.log(Readspc);
app.get('/api/Readspc', (request, response) => {
    let data = "";
    Readspc.forEach((value) => {
        const id = value.id;
        const Facility_name = value.Facility_name;
        data += `<a href="/api/Readspc/${id}">${Facility_name}</a><br>`;
    });
    response.send(data);
});

app.get('/api/Readspc/:id', (request, response) => {
    var data = "";
    Readspc.forEach((value) => {
        if(value.id === request.params.id) {
            data = `Form <br> Id: ${value.id}<br> Facility Name: ${value.Facility_name}
            <br> Facility Head Office and Location Of Activity <br> Head Office (Governorate):${value.Governorate} <br> Head Office (City): ${value.City} <br> Address: ${value.Facility_Address}<br> Phone Number: ${value.Facility_Phone_Number}<br> Fax:${value.Fax}<br> Investor data <br> Financial data <br> Capital: ${value.capital} ${value.Capital_Currency} <br> Investor <br>  Investor Name: ${value.investorname} <br> Gender: ${value.Gender}<br> Nationality: ${value.Nationality}<br> Type of Identity: ${value.TypeOf_IdentityProof}<br> Investor NationalID: ${value.investor_nationalid}<br> Birthdate: ${value.BirthDate}<br> Phone Number: ${value.Phone_Number}<br> Fax: ${value.Investor_Fax}<br> Email: ${value.email}<br> Investor_Address : ${value.Investor_Address}`;
            return;
        }
    });
    response.send(data || 'No forms matches the requested id');
}); 
/*app.put('/api/Readspc/:id', (request, response) => {
    const id = request.params.id 
    const newcompanyname = request.body.Company_name
    const form = Readspc.find(form => form.id === id)
    form.Company_name = newcompanyname
    response.send(Readspc)
})*/

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));