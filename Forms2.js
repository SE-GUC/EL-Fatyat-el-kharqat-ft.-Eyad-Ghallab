const express = require('express');
const app = express();

const Forms2 = [
   {  id:'1',
   Company_name: "Pastriaholic", 
   Governorate:'Cairo', 
   City: 'Cairo', 
   Company_Address: '8 st hassanen abdel kader,Nasr city',
   Company_Phone_Number: '01289502264',
   Fax: '2347859', 
   Capital_Currency: 'United states dollar',
   capital: 2851.2 , 
   investorname: "Hana Hicham", 
   Investor_type:'person', 
   Gender:'Female', 
   Nationality:'Egyptian', 
   TypeOf_IdentityProof:'National ID', 
   investor_nationalid: '29712310101728', 
   BirthDate:'31/12/1997', 
   Address:'Madinaty B1', 
   Phone_Number:'01093654354', 
   Investor_Fax:'274589',
   email:'hana@hotmail.com',
   BOD_Name:'Sara Seif', 
   BOD_Investor_Type:'person', 
   BOD_Gender:'Female',
   BOD_Nationality:'Egyptian' , 
   BOD_TypeOfIdentityProof:'National ID', 
   BOD_NationalID: '29712310101734', 
   BOD_BirthDate: '2/06/1997', 
   BOD_Address: 'new cairo', 
   PositionInBOD: 'Head of BOD'},
   { id:'2', 
   Company_name: "LirtenHub", 
   Governorate: 'Alexandria', 
   City: 'Borg el arab', 
   Company_Address: '10st mostafa kamel',
   Company_Phone_Number: '01548974563',
   Fax: '125896', 
   Capital_Currency: 'Egyptian pound',
   capital: 51000 , 
   investorname: "Sama Zidan", 
   Investor_type:'person', 
   Gender:'Female', 
   Nationality:'Egyptian', 
   TypeOf_IdentityProof:'National ID', 
   investor_nationalid: '29811280101625',
   BirthDate:'28/11/1998', 
   Address:'Dyar Compound', 
   Phone_Number:'01158963472', 
   Investor_Fax:'274589'
   ,email:'sama@hotmail.com', 
   BOD_Name:'Sama', 
   BOD_Investor_Type:'person', 
   BOD_Gender:'Female', 
   BOD_Nationality:'Egyptian' , 
   BOD_TypeOfIdentityProof:'National ID', 
   BOD_NationalID: '29712310102234', 
   BOD_BirthDate: '2/08/1997', 
   BOD_Address: 'Maadi', 
   PositionInBOD: 'CEO'},
   { id:'3',
   Company_name: "Wuzzuf",  
   Governorate: 'Cairo', 
   City: 'Cairo', 
   Company_Address: 'Tahrir sq',
   Company_Phone_Number: '01548974563',
   Fax: '125896', 
   Capital_Currency: 'Egyptian pound',
   capital: 52000 , 
   investorname: "Rawan Esseily",
   Investor_type:'person', 
   Gender:'Female', 
   Nationality:'American', 
   TypeOf_IdentityProof:'Passport', 
   investor_nationalid: '29806220101724',
   BirthDate:'2/06/1998', 
   Address:'rehab v1', 
   Phone_Number:'01274578541',
   Investor_Fax:'357891', 
   email:'rawan@gmail.com', 
   BOD_Name: 'rawan', 
   BOD_Investor_Type:'person', 
   BOD_Gender:'Female', 
   BOD_Nationality:'American' , 
   BOD_TypeOfIdentityProof:'Passport', 
   BOD_NationalID: '26912310101776', 
   BOD_BirthDate: '2/06/1969', 
   BOD_Address: 'Nasr city', 
   PositionInBOD: 'CFO' },

];


app.get('/', (request, response) => {
    response.send(`<h1>Welcome to the form</h1>,
    <a href="/api/Forms2">Forms</a>`);
});
//console.log(Forms2);
app.get('/api/Forms2', (request, response) => {
    let data = "";
    Forms2.forEach((value) => {
        const id = value.id;
        const Company_name = value.Company_name;
        data += `<a href="/api/Forms2/${id}">${Company_name}</a><br>`;
    });
    response.send(data);
});

app.get('/api/forms2/:id', (request, response) => {
    var data = "";
    Forms2.forEach((value) => {
        if(value.id === request.params.id) {
            data = `Form <br> Id: ${value.id}<br> Comapany Name: ${value.Company_name}
            <br> Company Head Office and Location Of Activity <br> Head Office (Governorate):${value.Governorate} <br> Head Office (City): ${value.City} <br> Address: ${value.Company_Address}<br> Phone Number: ${value.Company_Phone_Number}<br> Fax:${value.Fax}<br> Investor data <br> Financial data <br> Capital: ${value.capital} ${value.Capital_Currency} <br> Investor <br>  Investor Name: ${value.investorname}<br> Investor type: ${value.Investor_type} <br> Gender: ${value.Gender}<br> Nationality: ${value.Nationality}<br> Type of Identity: ${value.TypeOf_IdentityProof}<br> Investor NationalID: ${value.investor_nationalid}<br> Birthdate: ${value.BirthDate}<br> Address: ${value.Address}<br> Phone Number: ${value.Phone_Number} <br> Investor Fax: ${value.Investor_Fax}<br> Email: ${value.email}<br> Board Of Directors <br> Name: ${value.BOD_Name} <br> Type of Investor: ${value.BOD_Investor_Type} <br> Gender: ${value.BOD_Gender}<br> Nationality: ${value.BOD_Nationality} <br> Type of Identity Proof: ${value.BOD_TypeOfIdentityProof}<br> National ID: ${value.BOD_NationalID}<br> BirthDate: ${value.BOD_BirthDate}<br> Address: ${value.BOD_Address} <br> Position in Board of Directors: ${value.PositionInBOD} `;
            return;
        }
    });
    response.send(data || 'No forms matches the requested id');
}); 

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));