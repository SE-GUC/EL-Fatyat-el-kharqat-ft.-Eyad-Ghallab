const express = require('express')
const app = express()
const joi = require('joi');
app.use(express.json())
const updateSSC= [
    {
        id:'1',
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
     
     
    

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

// Get all books
app.get('/api/updateSSC', (req, res) => {
    res.send(updateSSC)
})
app.put('/api/updateSSC/:id', (req, res) => {
    //if condition to make any updates if there is any comment and updated either by the lawyer or the investor
const formId = req.params.id 
const form = updateSSC.find(form => form.id === formId)
if ( req.body.Company_name){
const updatedCompany_name = req.body.Company_name
form.Company_name = updatedCompany_name 

const schema = {Company_name: joi.string().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});
}
if (req.body.Governorate){
const updatedGovernorate = req.body.Governorate
form.Governorate = updatedGovernorate

const schema = {Governorate: joi.string().valid(
      "cairo",
      "Alex",
      "Ismalia",
      "aswan",
      "luxor",
      "Domiat",
      "Elbahr elahmar",
      "asiut",
      "Damnhor",
      "Bne sweif",
      "Bor saed",
      "Giza",
      "ganob sina",
      "suez",
      "faioum",
      "qena",
      "banha",
      "kafr elsheikh",
      "monofia",
      "aswan",
      "elmenia",
      "elwadi elgedid",
      "Qlioubia",
      "Gharbia",
      "aswan",
      "Sharaaia"
    ).required()}

const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});
}
if ( req.body.City){
const updatedCity = req.body.City
form.City = updatedCity

const schema = { City: joi.string()
    .valid(
      "Abnūb",
      "Abū al-Maṭāmīr",
      "Abū an-Numrus",
      "Abū Ḥammād",
      "Abū Ḥummuṣ",
      "Abū Kabīr",
      "Abū Qurqās",
      "Abū Ṣuwayr",
      "Abū Tīj",
      "Abū Tisht",
      "Aḍ-Ḍabah",
      "Ad-Dilinjāt",
      "Ajā",
      "Akhmīm",
      "Al-Arīsh",
      "Al-Ayyāṭ",
      "Al-Badārī",
      "Al-Badrashayn",
      "Al-Bājūr",
      "Al-Balyanā",
      "Al-Baṣaliyah Baḥri",
      "Al-Bāwīṭī",
      "Al-Bāyaḍiyah",
      "Al-Fashn",
      "Al-Fatḥ-An-Nāṣiriyah",
      "Al-Fayyūm",
      "Al-Ghanāyim ",
      "Al-Ghurdaqah",
      "Al-Ḥammām",
      "Al-Ḥāmūl",
      "Al-Ḥawāmidiyah",
      "Al-Ḥusayniyah",
      "Al-Ibrāhīmiyah",
      "Al-Idwah",
      "Al-Iskandariyah",
      "Al-Ismāīliyah",
      "Al-Jamāliyah",
      "Al-Jīzah ",
      "Al-Khānkah",
      "Al-Khārijah",
      "Al-Khuṣūṣ",
      "Al-Kurdy",
      "Al-Maḥallah al-Kubrā",
      "Al-Maḥmūdiyah",
      "Al-Manshāh",
      "Al-Manṣūrah",
      "Al-Manzilah",
      "Al-Marāghah",
      "Al-Maṭariyah",
      "Al-Minyā",
      "Al-Minyā al-Jadīdah",
      "Al-Qāhirah",
      "New Cairo",
      "Al-Qanāṭir al-Khayriyah",
      "Al-Qanāyāt",
      "Al-Qantarah",
      "Al-Qanṭarah Sharq",
      "Al-Qarnuh al-Jadīdah",
      "Al-Qaṣāṣīn al-Jadīdah",
      "Al-Qurayn",
      "Al-Quṣayr",
      "Al-Qūṣiyah",
      "Al-Ubūr",
      "Luxor",
      "Al-Waqf ",
      "Al-Wāsiṭā",
      "El Negaila",
      "An-New Nubariya",
      "Armant",
      "Ar-Radīsiyah Qiblī",
      "Ar-Rahmaniya",
      "Ar-Rawḍah",
      "Ar-Riyāḍ",
      "Ashmoun",
      "Ash-Shalātīn",
      "Sheikh Zayed City",
      "Sheikh Zuweid",
      "Ash-Shuhadā",
      "Ash-Shurūq",
      "Aṣ-Ṣaff",
      "New Salhia",
      "As-Sallūm",
      "As-Sanṭah",
      "As-Sarw",
      "As-Sibāiyah Gharb",
      "El Senbellawein",
      "Suez",
      "Aswān",
      "Asyut",
      "Aṭfīḥ",
      "At-Tall al-Kabīr",
      "Aṭ-Ṭūd",
      "El Tor",
      "Awlād Ṣaqr",
      "Awsīm",
      "Zagazig",
      "Az-Zarqā",
      "Az-Zayniyah Qiblī",
      "Badr",
      "Balṭīm",
      "Banhā",
      "Beni Mazar",
      "Beni Suef",
      "New Beni Suef",
      "Banī Ubayd",
      "Basyoun",
      "Bibā",
      "Bilbays",
      "Belqas",
      "Bīr al-Abd",
      "Birket el-Sab",
      "Biyalā",
      "Burj al-Arab",
      "Burj al-Barlus",
      "Port Said",
      "Damanhour",
      "Dar as-Salām",
      "Daraw",
      "Dayr Mawās",
      "Dairut",
      "Dikirnis",
      "Dishnā",
      "Desouk",
      "Diyarb Najm",
      "Dumyāṭ ",
      "Fayid ",
      "Faqous",
      "Fāraskūr  ",
      "Farshūṭ ",
      "Fuwah ",
      "Ḥawsh-Īsā",
      "Hihyā",
      "Ibsheway",
      "Edfu",
      "Idkū",
      "Ihnāsiyā",
      "Isnā",
      "Iṭsā",
      "Ityāy al-Bārūd",
      "Izbat al-Burj",
      "Girga",
      "Juhaynah",
      "Kafr ad-Dawwār",
      "Kafr al-Baṭṭīkh",
      "Kafr el-Sheikh",
      "Kafr az-Zayyāt",
      "Kafr Saad",
      "Kafr Ṣaqr",
      "Kafr Shukr",
      "Kawm Ḥamādah",
      "Kawm Umbū",
      "Kirdāsah",
      "10th of Ramadan City",
      "Madīnat as-Sādāt",
      "Madīnat Badr",
      "Madīnat Burj al-Arab al-Jadīdah",
      "Madīnat Dumyāṭ al-Jadīdah",
      "Madīnat Sittah Uktūbar",
      "Maghāghah ",
      "Maḥallah Damanah",
      "Mallawī ",
      "Manfalūṭ    ",
      "Manshat al-Qanāṭir",
      "Marsā Maṭrūḥ ",
      "Mashtūl as-Sūq ",
      "Maṭāy",
      "Minūf   ",
      "Minyā al-Qamḥ   ",
      "Minyat an-Naṣr  ",
      "Mīt Abū Ghālb ",
      "Mīt Ghamr   ",
      "Mīt Salsīl",
      "Munshāh Abū-Umar ",
      "Dakhla",
      "Muṭūbis",
      "Nabarūh ",
      "Naj-Ḥammādī",
      "Naqādah ",
      "Nāṣir Būsh",
      "Qahā   ",
      "Qallīn ",
      "Qalyūb",
      "Qifṭ",
      "Qinā",
      "Qūṣ",
      "Quṭūr",
      "Quwaysinā",
      "Rafaḥ",
      "Rās al-Bar",
      "Ras Ghārib ",
      "Rashīd",
      "Safājā",
      "Sāḥīl Salim",
      "Samālūṭ",
      "Samannūd",
      "Ṣān al-Ḥajar",
      "Sāqultah",
      "Sawhāj",
      "Sharm ash-Shaykh",
      "Shibīn al-Kawm",
      "Shibīn al-Qanāṭir",
      "Shirbīn",
      "Shubrā al-Khaymah",
      "Shubrākhīt",
      "Ṣidfā",
      "Sīdī Barrānī",
      "Sīdī Ghāzī",
      "Sīdī Sālim",
      "Sinnūris",
      "Sirs al-Layyānah",
      "Sīwa",
      "Sumusṭā al-Waqf",
      "Ṭahṭā",
      "Talā",
      "Ṭalkhā",
      "Tama al-Āmdīd",
      "Ṭāmiyah",
      "Ṭanṭā",
      "Ṭimā",
      "Ṭūkh",
      "Natron Valley",
      "Yūsuf aṣ-Ṣiddīq",
      "Ziftā"
    )
    .required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});
}

if ( req.body.Company_Address){
const updatedCompany_Address = req.body.Company_Address
form.Company_Address = updatedCompany_Address

const schema = {Company_Address: joi.string().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}
if ( req.body.Company_Phone_Number){
const updatedCompanyPhoneNumber = req.body.Company_Phone_Number
form.Company_Phone_Number = updatedCompanyPhoneNumber
const schema = {Company_Phone_Number: joi.string()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}
if ( req.body.Fax){
const updatedFax = req.body.Fax
form.Fax = updatedFax
const schema = {
  Fax: joi.string()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.Capital_Currency){
const updatedCapitalCurrency = req.body.Capital_Currency
form.Capital_Currency = updatedCapitalCurrency
const schema = {Capital_Currency: joi.string()
    .valid(
      "Abkhazian apsar",
      "Russian ruble",
      "Afghan afghani",
      "Albanian lek",
      "Alderney pound",
      "British pound",
      "Guernsey pound",
      "Algerian dinar",
      "Euro",
      "Angolan kwanza",
      "East Caribbean dollar",
      "Argentine peso",
      "Armenian dram",
      "Aruban florin",
      "Ascension pound",
      "Saint Helena pound",
      "Australian dollar",
      "Azerbaijani manat",
      "Bahamian dollar",
      "Bahraini dinar",
      "Bangladeshi taka",
      "Barbadian dollar",
      "Belarusian ruble",
      "Belize dollar",
      "West African CFA franc",
      "Bermudian dollar",
      "Bhutanese ngultrum",
      "Indian rupee",
      "Bolivian boliviano",
      "Bosnia and Herzegovina convertible mark",
      "Botswana pula",
      "Brazilian real",
      "British Virgin Islands dollar",
      "Brunei dollar",
      "Singapore dollar",
      "Bulgarian lev",
      "Burundian franc",
      "Cambodian riel",
      "Central African CFA franc",
      "Canadian dollar",
      "Cape Verdean escudo",
      "Cayman Islands dollar",
      "Chilean peso",
      "Chinese yuan",
      "Colombian peso",
      "Comorian franc",
      "Congolese franc",
      "New Zealand dollar",
      "Cook Islands dollar",
      "Costa Rican colón",
      "Croatian kuna",
      "Cuban convertible peso",
      "Cuban peso",
      "Netherlands Antillean guilder",
      "Czech koruna",
      "Danish krone",
      "Djiboutian franc",
      "Dominican peso",
      "Egyptian pound",
      "Eritrean nakfa",
      "Ethiopian birr",
      "Falkland Islands pound",
      "Faroese króna",
      "Fijian dollar",
      "CFP franc",
      "Gambian dalasi",
      "Georgian lari",
      "Ghana cedi",
      "Gibraltar pound",
      "Guatemalan quetzal",
      "Guinean franc",
      "Guyanese dollar",
      "Haitian gourde",
      "Honduran lempira",
      "Hong Kong dollar",
      "Hungarian forint",
      "Icelandic króna",
      "Indonesian rupiah",
      "Iranian rial",
      "Iraqi dinar",
      "Manx pound",
      "Israeli new shekel",
      "Jamaican dollar",
      "Japanese yen",
      "Jersey pound",
      "Jordanian dinar",
      "Kazakhstani tenge",
      "Kenyan shilling",
      "Kiribati dollar",
      "North Korean won",
      "South Korean won",
      "Kuwaiti dinar",
      "Kyrgyzstani som",
      "Lao kip",
      "Lebanese pound",
      "Lesotho loti",
      "South African rand",
      "Liberian dollar",
      "Libyan dinar",
      "Swiss franc",
      "Macanese pataca",
      "Macedonian denar",
      "Malagasy ariary",
      "Malawian kwacha",
      "Malaysian ringgit",
      "Maldivian rufiyaa",
      "Mauritanian ouguiya",
      "Mauritian rupee",
      "Mexican peso",
      "Micronesian dollar",
      "Moldovan leu",
      "Mongolian tögrög",
      "Moroccan dirham",
      "Mozambican metical",
      "Burmese kyat",
      "Nagorno-Karabakh dram",
      "Namibian dollar",
      "Nauruan dollar",
      "Nepalese rupee",
      "Nicaraguan córdoba",
      "Nigerian naira",
      "Niue dollar",
      "Turkish lira",
      "Norwegian krone",
      "Omani rial",
      "Pakistani rupee",
      "Palauan dollar",
      "Panamanian balboa",
      "Papua New Guinean kina",
      "Paraguayan guaraní",
      "Peruvian nuevo sol",
      "Philippine peso",
      "Pitcairn Islands dollar",
      "Polish złoty",
      "Qatari riyal",
      "Romanian leu",
      "Rwandan franc",
      "Sahrawi peseta",
      "Samoan tālā",
      "São Tomé and Príncipe dobra",
      "Saudi riyal",
      "Serbian dinar",
      "Seychellois rupee",
      "Sierra Leonean leone",
      "Solomon Islands dollar",
      "Somali shilling",
      "Somaliland shilling",
      "South Georgia and the South Sandwich Islands pound",
      "South Sudanese pound",
      "Sri Lankan rupee",
      "Sudanese pound",
      "Surinamese dollar",
      "Swazi lilangeni",
      "Swedish krona",
      "Syrian pound",
      "New Taiwan dollar",
      "Tajikistani somoni",
      "Tanzanian shilling",
      "Thai baht",
      "Tongan paʻanga",
      "Transnistrian ruble",
      "Trinidad and Tobago dollar",
      "Tristan da Cunha pound",
      "Tunisian dinar",
      "Turkmenistan manat",
      "Tuvaluan dollar",
      "Ugandan shilling",
      "Ukrainian hryvnia",
      "United Arab Emirates dirham",
      "Uruguayan peso",
      "Uzbekistani som",
      "Vanuatu vatu",
      "Venezuelan bolívar",
      "Vietnamese đồng",
      "Yemeni rial",
      "Zambian kwacha",
      "United States dollar",
      "Zimbabwean Bond"
    )
    .required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}
if ( req.body.capital){
const updatedCapital= req.body.capital
form.capital = updatedCapital

const schema = { capital: joi.number().integer().min(50000).max(999999999999).required() }
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.investorname){
const updatedinvestorname= req.body.investorname
form.investorname= updatedinvestorname

const schema = {investorname: joi.string().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}

if ( req.body.Investor_type){
const updatedinvestortype= req.body.Investor_type
form.Investor_type= updatedinvestortype
const schema = {Investor_type: joi.valid("Person")}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}

if ( req.body.Gender){
const updatedGender= req.body.Gender
form.Gender= updatedGender
const schema = {Gender: joi.valid("Female","Male")}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}

if ( req.body.Nationality){
const updatedNationality= req.body.Nationality
form.Nationality= updatedNationality
const schema = {Nationality: joi.valid("  Afghan ",
"Albanian ",
" Algerian ",
"Argentinian",
"Australian ",
" Austrian ",
"Bangladeshi",
"Belgian",
" Bolivian ",
"Batswana ",
" Brazilian ",
" Bulgarian ",
" Cambodian ",
" Cameroonian ",
"Canadian",
"Chilean",
" Chinese ",
" Colombian ",
" Costa Rican ",
" Croatian ",
" Cuban ",
" Czech ",
" Danish ",
" Dominican ",
" Ecuadorian ",
" Egyptian ",
" Salvadorian ",
" English ",
" Estonian ",
" Ethiopian ",
" Fijian ",
" Finnish ",
" French ",
" German ",
" Ghanaian ",
" Greek ",
" Guatemalan ",
" Haitian ",
" Honduran ",
" Hungarian ",
" Icelandic ",
" Indian ",
"Indonesian",
"Iranian",
" Iraqi ",
" Irish ",
" Israeli ",
" Italian ",
" Jamaican ",
" Japanese ",
" Jordanian ",
" Kenyan ",
" Kuwaiti ",
" Lao ",
" Latvian ",
" Lebanese ",
"  Libyan  ",
" Lithuanian ",
" Malaysian ",
" Malian ",
" Maltese ",
" Mexican ",
" Mongolian ",
"Moroccan ",
"Mozambican",
" Namibian ",
" Nepalese ",
" Dutch ",
" New Zealand ",
" Nicaraguan ",
" Nigerian ",
" Norwegian ",
" Pakistani ",
" Panamanian ",
" Paraguayan ",
" Peruvian ",
"Philippine ",
"Polish",
" Portuguese ",
" Romanian ",
" Russian ",
" Saudi ",
"Scottish",
" Senegalese ",
" Serbian ",
" Singaporean ",
" Slovak ",
" South African ",
" Korean ",
" Spanish ",
" Sri Lankan ",
" Sudanese ",
" Swedish ",
"Swiss",
" Syrian ",
" Taiwanese ",
"Tajikistani ",
" Thai ",
" Tongan ",
" Tunisian ",
" Turkish ",
" Ukrainian ",
" Emirati ",
" British ",
" American ",
" Uruguayan ",
"Venezuelan",
" Vietnamese ",
" Welsh ",
" Zambian ",
" Zimbabwean ").required()
 }
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}

if ( req.body.TypeOf_IdentityProof){
const updatedTypeOfIdentityProof= req.body.TypeOf_IdentityProof
form.TypeOf_IdentityProof= updatedTypeOfIdentityProof
const schema = {TypeOf_IdentityProof: joi.valid("National_ID","passport").required()
}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}

if ( req.body.investor_nationalid){
 const updatedInvestorNationalID= req.body.investor_nationalid
form.investor_nationalid= updatedInvestorNationalID
const schema = {investor_nationalid: joi.string().min(14).max(14).required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}

if ( req.body.BirthDate){
const updatedBirthDate= req.body.BirthDate
form.BirthDate= updatedBirthDate
const schema = {BirthDate: joi.date().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}

if ( req.body.Address){
const updatedAdress= req.body.Address
form.Address= updatedAdress
const schema = {Address: joi.string().min(3).required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});


}

if ( req.body.Phone_Number){
const updatedPhoneNumber= req.body.Phone_Number
form.Phone_Number= updatedPhoneNumber
const schema = {Phone_Number: joi.string().max(13)}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}

if ( req.body.Investor_Fax){
const updatedTypeOfInvestorFax= req.body.Investor_Fax
form.Investor_Fax= updatedTypeOfInvestorFax
const schema = {Investor_Fax: joi.string()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.email){
const updatedemail= req.body.email
form.email= updatedemail
const schema = {email: joi.string()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.BOD_Name){
const updatedBodName= req.body.BOD_Name
form.BOD_Name= updatedBodName
const schema = {BOD_Name: joi.string().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}

if ( req.body.BOD_Investor_Type){
const updatedBodInvestorType= req.body.BOD_Investor_Type
form.Investor_type= updatedBodInvestorType
const schema = {BOD_Investor_Type: joi.string().valid("Person").required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}

if ( req.body.BOD_Gender){
const updatedBodGender= req.body.BOD_Gender
 form.BOD_Gender= updatedBodGender
 const schema = {BOD_Gender: joi.string().valid("Female","Male").required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.BOD_Nationality){
const updatedBodNationality= req.body.BOD_Nationality
form.BOD_Nationality= updatedNationality
const schema = {BOD_Nationality:joi.valid(" Afghan ",
"Albanian ",
" Algerian ",
"Argentinian",
"Australian ",
" Austrian ",
"Bangladeshi",
"Belgian",
" Bolivian ",
"Batswana ",
" Brazilian ",
" Bulgarian ",
" Cambodian ",
" Cameroonian ",
"Canadian",
"Chilean",
" Chinese ",
" Colombian ",
" Costa Rican ",
" Croatian ",
" Cuban ",
" Czech ",
" Danish ",
" Dominican ",
" Ecuadorian ",
" Egyptian ",
" Salvadorian ",
" English ",
" Estonian ",
" Ethiopian ",
" Fijian ",
" Finnish ",
" French ",
" German ",
" Ghanaian ",
" Greek ",
" Guatemalan ",
" Haitian ",
" Honduran ",
" Hungarian ",
" Icelandic ",
" Indian ",
"Indonesian",
"Iranian",
" Iraqi ",
" Irish ",
" Israeli ",
" Italian ",
" Jamaican ",
" Japanese ",
" Jordanian ",
" Kenyan ",
" Kuwaiti ",
" Lao ",
" Latvian ",
" Lebanese ",
"  Libyan  ",
" Lithuanian ",
" Malaysian ",
" Malian ",
" Maltese ",
" Mexican ",
" Mongolian ",
"Moroccan ",
"Mozambican",
" Namibian ",
" Nepalese ",
" Dutch ",
" New Zealand ",
" Nicaraguan ",
" Nigerian ",
" Norwegian ",
" Pakistani ",
" Panamanian ",
" Paraguayan ",
" Peruvian ",
"Philippine ",
"Polish",
" Portuguese ",
" Romanian ",
" Russian ",
" Saudi ",
"Scottish",
" Senegalese ",
" Serbian ",
" Singaporean ",
" Slovak ",
" South African ",
" Korean ",
" Spanish ",
" Sri Lankan ",
" Sudanese ",
" Swedish ",
"Swiss",
" Syrian ",
" Taiwanese ",
"Tajikistani ",
" Thai ",
" Tongan ",
" Tunisian ",
" Turkish ",
" Ukrainian ",
" Emirati ",
" British ",
" American ",
" Uruguayan ",
"Venezuelan",
" Vietnamese ",
" Welsh ",
" Zambian ",
" Zimbabwean ").required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.BOD_TypeOfIdentityProof){
const updatedBODTypeOfIdentityProof= req.body.BOD_TypeOfIdentityProof
form.BOD_TypeOfIdentityProof= updatedBODTypeOfIdentityProof
const schema = {BOD_TypeOfIdentityProof: joi.string().valid("National_ID","Passport").required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
 if ( req.body.BOD_NationalID){
const updatedBODNationalID= req.body.BOD_NationalID
form.BOD_NationalID= updatedBODNationalID
const schema = {BOD_NationalID: joi.string().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.BOD_BirthDate){
const updatedBODbirthdate= req.body.BOD_BirthDate
form.BOD_BirthDate= updatedBODbirthdate
const schema = {BOD_BirthDate: joi.date().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}

if ( req.body.BOD_Address){
const updatedBODAddress= req.body.BOD_Address
form.BOD_Address= updatedBODAddress
const schema = {BOD_Address: joi.string().required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});

}
if ( req.body.PositionInBOD){
const updatedPositionInBOD= req.body.PositionInBOD
form.PositionInBOD= updatedPositionInBOD
const schema = {PositionInBOD: joi.string().valid("Chair","Vice President","Secretary",
"Treasurer","Past President","Director","ublic Relations (PR) Director","Membership Director",
"Industry, Legislation, Conservation Director","At-Large","Webmaster").required()}
const result=joi.validate(req.body,schema);
if (result.error) return res.status(400).send({error: result.error.details[0].message});
}

                                                                        
res.send(updateSSC)
  })
  const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))