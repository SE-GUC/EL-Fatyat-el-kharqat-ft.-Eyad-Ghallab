
const express = require('express')


// Create the app

// Use it with post

const router = express.Router()
//router.use(express.json());
//const Joi = require('Joi');
const mongoose = require('mongoose')

const Form = require('../../models/SSC')
const validator = require('../../validations/SSCvalid')

router.get('/all', async (req,res) => {
    const forms = await SSC.find()
    res.json({data: forms})
})

router.get('/:id/find', async (req,res) => {
  const sscforms = await SSC.findById(req.params.id)
  const estimatedprice =sscforms.get('capital')
  var price = estimatedprice/1000
 var price2 = 0.0025*estimatedprice
var finalprice=0
  console.log(estimatedprice)
  if (price < 100 ){
     finalprice += 100
  }
    if (price2 < 10){
  finalprice += 10
   }
   if (price > 1000){
    finalprice += 1000
   }
   if (price2 > 1000){
    finalprice += 1000
     }
if (price >= 100 && price <= 1000){
  finalprice += price 
}
if (price2 >= 10 && price2 <= 1000){
  finalprice += price2 
}
finalprice += 660


      res.json({data : "your estimated price to be paid is EGP ",finalprice})


})

router.get ('/',(req,res) =>{ 
  Form.find({Status:"accepted", is_the_external_entities_notified:"true"})
.then((Hana) => {
          var data= "";
          Hana.forEach((sscform)=> {
            const id = sscform.id;
            const Company_name = sscform.Company_name;
          data += `<a href="/api/SSC/${id}">${Company_name}</a><br>`;
          });
         res.send(data);
          })
        });

router.get('/:id',(req,res)=>{
  const query = Form.find({})
  .where('_id').equals(req.params.id)
    query.exec()
  .then((sscform) => {
    console.log(`There is a match`);
    
   
return res.send([sscform[0].id,sscform[0].Company_name,sscform[0].Governorate,sscform[0].City,sscform[0].Company_Address,sscform[0].Company_Phone_Number,sscform[0].Fax,sscform[0].Capital_Currency,sscform[0].capital,sscform[0].investorname,sscform[0].Gender,sscform[0].Nationality,sscform[0].TypeOf_IdentityProof,sscform[0].investor_nationalid,sscform[0].BirthDate,sscform[0].Address,sscform[0].Phone_Number,sscform[0].email,sscform[0].BOD_Name,sscform[0],sscform[0].BOD_Investor_Type,sscform[0].BOD_Gender,sscform[0].BOD_Nationality, sscform[0].BOD_TypeOfIdentityProof,sscform[0].BOD_NationalID,sscform[0].BOD_BirthDate,sscform[0].BOD_Address, sscform[0].PositionInBOD, sscform[0].Formdate, sscform[0].Locked, sscform[0].Status, sscform[0].is_the_external_entities_notified ]);
 
})
})


// Create a form
router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const { investorname} = req.body;
		const form = await Form.findOne({ investorname });
    if (form) return res.status(400).json({ investorname: 'You can not create 2 SSC companies' });
    const { Company_name} = req.body;
		const ssc = await Form.findOne({ Company_name });
    if (ssc) return res.status(400).json({ Company_name: 'Company name already exists' });
   const NewForm = await SSC.create(req.body)
   res.json({msg:'Form was created successfully', data: NewForm})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})

// Update a book
router.put('/:id', async (req,res) => {
  try {
    
  // const id = req.params.id
   const form = await SSC.findById(req.params.id)
   if(!form) return res.status(404).send({error: 'form does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedform = await form.updateOne(req.body)
   res.json({msg: 'Form updated successfully',updatedform})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})




router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedForm = await SSC.findByIdAndRemove(id)
   res.json({msg:'Book was deleted successfully', data: deletedForm})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})




module.exports = router
