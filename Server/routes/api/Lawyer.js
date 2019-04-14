const express = require('express')
const router = express.Router();

const lawyer = require('../../models/Lawyer')
const validator = require('../../validations/Lawyervalid')
const SpcForm = require('../../models/SPC')
const Form = require('../../models/SSC')


//update lawyers
router.put('/:id', async (req,res) => {
    try{
    const id =await Lawyer.findById(req.params.id)
    
    const isValidated=validator.updateValidation(req.body)
    const updatedlawyer=await id.updateOne(req.body)
    if(isValidated.error){
      return res.status(400).send({ error: isValidated.error.details[0].message })}
    
    // else{
    //   Lawyer.updateOne({id:id},{$set:updatedlawyer}).exec().then(()=>{
        res.status(500).json({
          message:"Lawyer is updated successfully",
          data:updatedlawyer
        })
      

      }catch(error) {
        res.status(500).json({
          message:"error",
       //console.log(error)
    })
  }
//}
})

// get all unlocked SSC forms

router.get('/find/SSC',(req,res)=>{
    
    Form.find({Locked:false}).sort({Formdate: -1})
  .then((Form) => {
    console.log(`There are ${Form.length} SSC forms`);
   // res.setHeader('Content-Type', 'text/plain');
    var datassc='';
    Form.forEach((SSC) => {
      datassc+=`<p>Company_name:${SSC.Company_name} 
        Governorate:${SSC.Governorate} 
        City:${SSC.City} 
        Locked:${SSC.Locked}
        Formdate:${SSC.Formdate}
        reviews:${SSC.reviews}
        Company_Address:${SSC.Company_Address}
        Company_Phone_Number:${SSC.Company_Phone_Number}
        Fax:${SSC.Fax}
        Capital_Currency:${SSC.Capital_Currency}
        capital:${SSC.capital}
        investorname:${SSC.investorname}
        Investor_type:${SSC.Investor_type}
        Gender:${SSC.Gender}
        Nationality:${SSC.Nationality}
        TypeOf_IdentityProof:${SSC.TypeOf_IdentityProof}
        investor_nationalid:${SSC.investor_nationalid}
        Address:${SSC.Address}
        Phone_Number:${SSC.Phone_Number}
        email:${SSC.email}
        BOD_Name:${SSC.BOD_Name}
        BOD_Investor_Type:${SSC.BOD_Investor_Type}
        BOD_Gender:${SSC.BOD_Gender}
        BOD_Nationality:${SSC.BOD_Nationality}
        BOD_TypeOfIdentityProof:${SSC.BOD_TypeOfIdentityProof}
        BOD_NationalID:${SSC.BOD_NationalID}
        BOD_BirthDate:${SSC.BOD_BirthDate}
        BOD_Address:${SSC.BOD_Address}
        PositionInBOD:${SSC.PositionInBOD}
        is_the_external_entities_notified:${SSC.is_the_external_entities_notified}
        Status:${SSC.Status}
       

        </p></br> `;
    });
    return res.send(datassc)
})

.catch((error) => {
  return res.send(`Error encountered retrieving all accounts. Error: ${error}`);
});

});

// get all unclocked SPC forms
router.get('/find/SPC',(req,res)=>{

SpcForm.find({Locked:false}).sort({Form_Date: -1})
  .then((SpcForm) => {
     console.log(`There are ${SpcForm.length} SPC forms`);
   var dataspc='';
    SpcForm.forEach((SPC) => {
      dataspc+=`<p>Company_name:${SPC.Company_name} 
        Governorate:${SPC.Governorate} 
        City:${SPC.City} 
        Locked:${SPC.Locked}
        Form_Date:${SPC.Form_Date}
        Facility_Address:${SPC.Facility_Address}
        Facility_Phone_Number:${SPC.Facility_Phone_Number}
        Capital_Currency:${SPC.Capital_Currency}
        Fax:${SPC.Fax}
        capital:${SPC.capital}
        investorname:${SPC.investorname}
        Gender:${SPC.Gender}
        Nationality:${SPC.Nationality}
        TypeOf_IdentityProof:${SPC.TypeOf_IdentityProof}
        investor_nationalid:${SPC.investor_nationalid}
        BirthDate:${SPC.BirthDate}
        Phone_Number:${SPC.Phone_Number}
        Investor_Fax:${SPC.Investor_Fax}
        email:${SPC.email}
        Investor_Address:${SPC.Investor_Address}
        Status:${SPC.Status}
        is_the_external_entities_notified:${SPC.is_the_external_entities_notified}
        </p></br> `;
        
    });
    return res.send(dataspc);  
})
  .catch((error) => {
    return res.send(`Error encountered retrieving all accounts. Error: ${error}`);
  });


});




router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedLawyer = await Lawyer.findByIdAndRemove(id)
     res.json({msg:'lawyer was deleted successfully', data: deletedLawyer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 //Get all lawyers

router.get('/', async (req,res) => {
    const lawyers = await Lawyer.find()
    res.json({msg: 'Lawyers are here',data: lawyers})
})

// Create a Lawyer

router.post('/createlawyer', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newLawyer = await Lawyer.create(req.body)
    res.json({msg:'Lawyer was created successfully', data: newLawyer})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

module.exports = router
    