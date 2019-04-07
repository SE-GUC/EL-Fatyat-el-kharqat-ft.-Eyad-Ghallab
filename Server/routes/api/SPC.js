
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const SpcForm = require('../../models/SPC')
const validator = require('../../validations/SPCvalid')

//Create Form
router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
  const { Facility_name} = req.body;
  const form = await SpcForm.findOne({ Facility_name });
  if (form) return res.status(400).json({ Facility_name: 'Facility name already exists' });
   const newSpcForm = await SpcForm.create(req.body)
   res.json({msg:'Form was created successfully', data: newSpcForm})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})

//Read Form
router.get('/', async (req,res) => {
    const spcforms = await SpcForm.find()
    //res.json({data: spcforms})
    res.json({msg: 'Here are the SPC Forms',data: spcforms})

})

router.get('/:id', async (req,res) => {
    const spcforms = await SpcForm.findById(req.params.id)
   res.json({data : spcforms})

})

//Update Form
router.put('/:id', async (req,res) => {
  
   const id = req.params.id
   const updatedspcform = req.body
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) {
     return res.status(400).send({ error: isValidated.error.details[0].message })
   }
   else {
     SpcForm.update({_id: id},{$set:updatedspcform}).exec().then(() => {
       res.status(500).json({
         message: "Form is updated Successfully",
         data: updatedspcform
       })
     }).catch(error => {
       res.status(500).json({
         message:"Server error"
       })
     }) 
  }  
}) 

// Delete Form
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedSpcForm = await SpcForm.findByIdAndRemove(id)
   res.json({msg:'Form was deleted successfully', data: deletedSpcForm})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
//user story sama
router.get('/:id/find', async (req,res) => {
  const spcforms = await SpcForm.findById(req.params.id)
  const estimatedprice =spcforms.get('capital')
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
// user story Hana
 router.get ('/accepted',(req,res) =>{ 
    SpcForm.find({Status:"accepted", is_the_external_entities_notified:"true"})
  .then((Hana) => {
            // var data= "";
            // Hana.forEach((spcform)=> {
            //   const id = spcform.id;
            //   const Facility_name = spcform.Facility_name;
            // data += `<a href="/api/SPC/${id}">${Facility_name}</a><br>`;
            // });
           res.send(Hana);
            })
          });
 
  // router.get('/:id',(req,res)=>{
  //   const query = schema.find({})
  //   .where('_id').equals(req.params.id)
  //     query.exec()
  //   .then((spcform) => {
  //     console.log(`There is a match`);
      
     
// return res.send([spcform[0].id,spcform[0].Facility_name,spcform[0].Governorate,spcform[0].City,spcform[0].Facility_Address,spcform[0].Facility_Phone_Number,spcform[0].Fax,spcform[0].Capital_Currency,spcform[0].capital,spcform[0].investorname,spcform[0].Gender,spcform[0].Nationality,spcform[0].TypeOf_IdentityProof,spcform[0].investor_nationalid,spcform[0].BirthDate,spcform[0].Phone_Number,spcform[0].Investor_Fax,spcform[0].email,spcform[0].Investor_Address, spcform[0].Form_Date, spcform[0].Locked, spcform[0].Status, spcform[0].is_the_external_entities_notified]);
   
//   })
// })

module.exports = router

