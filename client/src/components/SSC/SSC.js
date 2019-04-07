import React, { Component } from 'react';
import './SSC.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class SSC extends Component {
    constructor(){
        super();
        this.handleCompany_nameChange= this.handleCompany_nameChange.bind(this);
        this.handleGovernorateChange= this.handleGovernorateChange.bind(this);
        this.handleCityChange =  this.handleCityChange.bind(this);
        this.handleCompany_AddressChange =  this.handleCompany_AddressChange.bind(this);
        this.handleCompany_Phone_NumberChange =  this.handleCompany_Phone_NumberChange.bind(this);
        this.handleFaxChange =  this.handleFaxChange.bind(this);
        this.handleCapital_CurrencyChange=  this.handleCapital_CurrencyChange.bind(this) ;
        this.handlecapitalChange=  this.handlecapitalChange.bind(this);
        this.handleinvestornameChange=  this.handleinvestornameChange.bind(this);
        this.handleInvestor_typeChange=  this.handleInvestor_typeChange.bind(this);
        this.handleGenderChange=  this.handleGenderChange.bind(this);
        this.handleNationalityChange=  this.handleNationalityChange.bind(this);
        this.handleTypeOf_IdentityProofChange=  this.handleTypeOf_IdentityProofChange.bind(this);
        this.handleinvestor_nationalidChange= this.handleinvestor_nationalidChange.bind(this);
        this.handleBirthDateChange= this.handleBirthDateChange.bind(this);
        this.handleAddressChange= this.handleAddressChange.bind(this);
        this.handlePhone_NumberChange= this.handlePhone_NumberChange.bind(this);
        this.handleemailChange= this.handleemailChange.bind(this);
        this.handleBOD_NameChange= this.handleBOD_NameChange.bind(this);
        this.handleBOD_Investor_TypeChange= this.handleBOD_Investor_TypeChange.bind(this);
        this.handleBOD_GenderChange= this.handleBOD_GenderChange.bind(this);
        this.handleBOD_NationalityChange= this.handleBOD_NationalityChange.bind(this);
        this.handleBOD_TypeOfIdentityProofChange= this.handleBOD_TypeOfIdentityProofChange.bind(this);
        this.handleBOD_NationalIDChange= this.handleBOD_NationalIDChange.bind(this);
        this.handleBOD_BirthDateChange= this.handleBOD_BirthDateChange.bind(this);
        this.handleBOD_AddressChange= this.handleBOD_AddressChange.bind(this);
        this.handlePositionInBODChange= this.handlePositionInBODChange.bind(this);
       
     
        this.handleSubmit=this.handleSubmit.bind(this);
        this.delete=this.delete.bind(this);
        this.update=this.update.bind(this);
        this.state ={
            SSC:[],
            Company_name:"",
            Governorate:["cairo",
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
            "elmenia",
            "elwadi elgedid",
            "Qlioubia",
            "Gharbia",
           
            "Sharaaia"] ,
            City: [ "Abnūb",
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
            "Ziftā"],
            Company_Address:"",
            Company_Phone_Number:"" ,
            Fax:"" ,
            Capital_Currency:["Abkhazian apsar",
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
            "Zimbabwean Bond"], 
            capital:"", 
            investorname:"",
            Investor_type:"", 
            Gender:['Female','Male'],
            Nationality:["Afghan",
            "Albanian",
            "Algerian",
            "Argentinian",
            "Australian",
            "Austrian",
            "Bangladeshi",
            "Belgian",
            "Bolivian",
            "Batswana",
            "Brazilian",
            "Bulgarian",
            "Cambodian",
            "Cameroonian",
            "Canadian",
            "Chilean",
            "Chinese",
            "Colombian",
            "Costa Rican",
            "Croatian",
            "Cuban",
            "Czech",
            "Danish",
            "Dominican",
            "Ecuadorian",
            "Egyptian",
            "Salvadorian",
            "English",
            "Estonian",
            "Ethiopian",
            "Fijian",
            "Finnish",
            "French",
            "German",
            "Ghanaian",
            "Greek",
            "Guatemalan",
            "Haitian",
            "Honduran",
            "Hungarian",
            "Icelandic",
            "Indian",
            "Indonesian",
            "Iranian",
            "Iraqi",
            "Irish",
            "Israeli",
            "Italian",
            "Jamaican",
            "Japanese",
            "Jordanian",
            "Kenyan",
            "Kuwaiti",
            "Lao",
            "Latvian",
            "Lebanese",
            "Libyan",
            "Lithuanian",
            "Malaysian",
            "Malian",
            "Maltese",
            "Mexican",
            "Mongolian",
            "Moroccan",
            "Mozambican",
            "Namibian",
            "Nepalese",
            "Dutch",
            "New Zealand",
            "Nicaraguan",
            "Nigerian",
            "Norwegian",
            "Pakistani",
            "Panamanian",
            "Paraguayan",
            "Peruvian",
            "Philippine",
            "Polish",
            "Portuguese",
            "Romanian",
            "Russian",
            "Saudi",
            "Scottish",
            "Senegalese",
            "Serbian",
            "Singaporean",
            "Slovak",
            "South African",
            "Korean",
            "Spanish",
            "Sri Lankan",
            "Sudanese",
            "Swedish",
            "Swiss",
            "Syrian",
            "Taiwanese",
            "Tajikistani",
            "Thai",
            "Tongan",
            "Tunisian",
            "Turkish",
            "Ukrainian",
            "Emirati",
            "British",
            "American",
            "Uruguayan",
            "Venezuelan",
            "Vietnamese",
            "Welsh",
            "Zambian",
            "Zimbabwean"], 
            TypeOf_IdentityProof:["Passport", "National ID"] ,
            investor_nationalid:"" ,
            BirthDate:"",
            Address:"", 
            Phone_Number: "",
            email:"", 
            BOD_Name:"", 
            BOD_Investor_Type:"" ,
            BOD_Gender: ['Female','Male'],
            BOD_Nationality:[ "Afghan",
            "Albanian",
            "Algerian",
            "Argentinian",
            "Australian",
            "Austrian",
            "Bangladeshi",
            "Belgian",
            "Bolivian",
            "Batswana",
            "Brazilian",
            "Bulgarian",
            "Cambodian",
            "Cameroonian",
            "Canadian",
            "Chilean",
            "Chinese",
            "Colombian",
            "Costa Rican",
            "Croatian",
            "Cuban",
            "Czech",
            "Danish",
            "Dominican",
            "Ecuadorian",
            "Egyptian",
            "Salvadorian",
            "English",
            "Estonian",
            "Ethiopian",
            "Fijian",
            "Finnish",
            "French",
            "German",
            "Ghanaian",
            "Greek",
            "Guatemalan",
            "Haitian",
            "Honduran",
            "Hungarian",
            "Icelandic",
            "Indian",
            "Indonesian",
            "Iranian",
            "Iraqi",
            "Irish",
            "Israeli",
            "Italian",
            "Jamaican",
            "Japanese",
            "Jordanian",
            "Kenyan",
            "Kuwaiti",
            "Lao",
            "Latvian",
            "Lebanese",
            "Libyan",
            "Lithuanian",
            "Malaysian",
            "Malian",
            "Maltese",
            "Mexican",
            "Mongolian",
            "Moroccan",
            "Mozambican",
            "Namibian",
            "Nepalese",
            "Dutch",
            "New Zealand",
            "Nicaraguan",
            "Nigerian",
            "Norwegian",
            "Pakistani",
            "Panamanian",
            "Paraguayan",
            "Peruvian",
            "Philippine",
            "Polish",
            "Portuguese",
            "Romanian",
            "Russian",
            "Saudi",
            "Scottish",
            "Senegalese",
            "Serbian",
            "Singaporean",
            "Slovak",
            "South African",
            "Korean",
            "Spanish",
            "Sri Lankan",
            "Sudanese",
            "Swedish",
            "Swiss",
            "Syrian",
            "Taiwanese",
            "Tajikistani",
            "Thai",
            "Tongan",
            "Tunisian",
            "Turkish",
            "Ukrainian",
            "Emirati",
            "British",
            "American",
            "Uruguayan",
            "Venezuelan",
            "Vietnamese",
            "Welsh",
            "Zambian",
            "Zimbabwean"], 
            BOD_TypeOfIdentityProof:["Passport", "National ID"],
            BOD_NationalID: "",
            BOD_BirthDate: "",
            BOD_Address:"", 
            PositionInBOD: ["Chair","Vice President","Secretary","Treasurer","Past President","Director",
            "Public Relations (PR) Director","Membership Director","Industry, Legislation, Conservation Director",
            "At-Large","Webmaster"]
        }
    
    }
    
    handleCompany_nameChange(e){
        this.setState({Company_name: e.target.value })
    }
    handleGovernorateChange(e){
        this.setState({Governorate: e.target.value })
    }
    handleCityChange(e){
        this.setState({City: e.target.value })
    }
 
    handleCompany_AddressChange (e){
        this.setState({Company_Address: e.target.value })
    }
    handleCompany_Phone_NumberChange(e){
        this.setState({Company_Phone_Number: e.target.value })
    }
    handleFaxChange(e) {
        this.setState({Fax: e.target.value })
    }
    handleCapital_CurrencyChange(e){
        this.setState({Capital_Currency: e.target.value })
    }
    handlecapitalChange(e){
        this.setState({capital: e.target.value })
    }
    handleinvestornameChange(e){
        this.setState({investorname: e.target.value })
    }
    handleInvestor_typeChange(e){
        this.setState({Investor_type: e.target.value })
    }
    handleGenderChange(e){
        this.setState({Gender: e.target.value })
    }
    handleNationalityChange(e){
        this.setState({Nationality: e.target.value })
    }
    handleTypeOf_IdentityProofChange(e){
        this.setState({TypeOf_IdentityProof: e.target.value })
    }
    handleinvestor_nationalidChange(e){
        this.setState({investor_nationalid: e.target.value })
    }
    handleBirthDateChange(e){
        this.setState({BirthDate: e.target.value })
    }
    handleAddressChange(e){
        this.setState({Address: e.target.value })
    }
    handlePhone_NumberChange(e){
        this.setState({Phone_Number: e.target.value })
    }
    handleemailChange(e){
        this.setState({email: e.target.value })
        
    }
    handleBOD_NameChange(e){
        this.setState({BOD_Name: e.target.value })
        
    }
    handleBOD_Investor_TypeChange(e){
        this.setState({BOD_Investor_Type: e.target.value })
        
    }
    handleBOD_GenderChange(e){
        this.setState({BOD_Gender: e.target.value })
        
    }
    handleBOD_NationalityChange(e){
        this.setState({BOD_Nationality: e.target.value })
        
    }
    handleBOD_TypeOfIdentityProofChange(e){
        this.setState({BOD_TypeOfIdentityProof: e.target.value })
        
    }
    handleBOD_NationalIDChange(e){
        this.setState({BOD_NationalID: e.target.value })
        
    }
    handleBOD_BirthDateChange(e){
        this.setState({BOD_BirthDate: e.target.value })

    }
    handleBOD_AddressChange(e){
        this.setState({BOD_Address: e.target.value })

    }
    handlePositionInBODChange(e){
        this.setState({PositionInBOD: e.target.value })

    }



    
      delete(Company_Name){
        return fetch('/api/SSC/'+Company_Name, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
  
      handleSubmit(e){
        e.preventDefault();
        let databody = {
          "Company_name":this.state.Company_name,
          "Governorate":this.state.Governorate, 
          "City": this.state.City,
          "Company_Address":this.state.Company_Address,
          "Company_Phone_Number":this.state.Company_Phone_Number,
          "Fax":this.state.Fax ,
          "Capital_Currency":this.state.Capital_Currency, 
          "capital":this.state.capital, 
          "investorname":this.state.investorname,
          "Investor_type":this.state.Investor_type, 
          "Gender":this.state.Gender ,
          "Nationality":this.state.Nationality, 
          "TypeOf_IdentityProof":this.state.TypeOf_IdentityProof,
          "investor_nationalid":this.state.investor_nationalid ,
          "BirthDate":this.state.BirthDate,
          "Address":this.state.Address, 
          "Phone_Number": this.state.Phone_Number,
          "email":this.state.email, 
          "BOD_Name":this.state.BOD_Name, 
          "BOD_Investor_Type":this.state.BOD_Investor_Type ,
          "BOD_Gender": this.state.BOD_Gender,
          "BOD_Nationality":this.state.BOD_Nationality, 
          "BOD_TypeOfIdentityProof":this.state.BOD_TypeOfIdentityProof,
          "BOD_NationalID":this.state.BOD_NationalID,
          "BOD_BirthDate": this.state.BirthDate,
          "BOD_Address":this.state.BOD_Address, 
          "PositionInBOD": this.state.PositionInBOD
      
        }
      return fetch('/api/SSC/', {
          method: 'POST',
          body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data)); 
  }
  
     
       
  update(id){
    console.log(this.state.Company_name)
     let databody 
 if (this.state.Company_name !== ""){
   databody = {"Company_name":this.state.Company_name}}
 if(this.state.Governorate !== ""){
   databody = {"Governorate":this.state.Governorate}}
   if(this.state.City !== ""){
     databody = {"City":this.state.City}}
     if(this.state.Company_Address !== ""){
       databody = {"Company_Address":this.state.Company_Address}}
       if(this.state.Company_Phone_Number !== ""){
         databody = {"Company_Phone_Number":this.state.Company_Phone_Number}}
         if(this.state.Fax !== ""){
           databody = {"Fax":this.state.Fax}}
           if(this.state.Capital_Currency !== ""){
             databody = {"Capital_Currency":this.state.Capital_Currency}}
             if(this.state.capital !== ""){
               databody = {"capital":this.state.capital}}
               if(this.state.investorname !== ""){
                 databody = {"investorname":this.state.investorname}}
                 if(this.state.Investor_type !== ""){
                   databody = {"Investor_type":this.state.Investor_type}}
                   if(this.state.Gender !== ""){
                    databody = {"Gender":this.state.Gender}}
                    if(this.state.Nationality !== ""){
                        databody = {"Nationality":this.state.Nationality}}
                        if(this.state.TypeOf_IdentityProof !== ""){
                            databody = {"TypeOf_IdentityProof":this.state.TypeOf_IdentityProof}}
                            if(this.state.investor_nationalid !== ""){
                                databody = {"investor_nationalid":this.state.investor_nationalid}}
                                if(this.state.BirthDate !== ""){
                                    databody = {"BirthDate":this.state.BirthDate}}
                                    if(this.state.Address !== ""){
                                        databody = {"Address":this.state.Address}}

                                        if(this.state.Phone_Number !== ""){
                                            databody = {"Phone_Number":this.state.Phone_Number}}
                                            if(this.state.email !== ""){
                                                databody = {"email":this.state.email}}
                                                if(this.state.BOD_Name !== ""){
                                                    databody = {"BOD_Name":this.state.BOD_Name}}
                                                    if(this.state.BOD_Investor_Type !== ""){
                                                        databody = {"BOD_Investor_Type":this.state.BOD_Investor_Type}}
                                                        if(this.state.BOD_Gender !== ""){
                                                            databody = {"BOD_Gender":this.state.BOD_Gender}}

                                                            if(this.state.BOD_Nationality !== ""){
                                                                databody = {"BOD_Nationality":this.state.BOD_Nationality}}
                                                                if(this.state.BOD_TypeOfIdentityProof !== ""){
                                                                    databody = {"BOD_TypeOfIdentityProof":this.state.BOD_TypeOfIdentityProof}}
                                                                    if(this.state.BOD_NationalID !== ""){
                                                                        databody = {"BOD_NationalID":this.state.BOD_NationalID}}
                                                                        if(this.state.BOD_BirthDate !== ""){
                                                                            databody = {"BOD_BirthDate":this.state.BOD_BirthDate}}
                                                                            if(this.state.BOD_Address !== ""){
                                                                                databody = {"BOD_Address":this.state.BOD_Address}}
                                                                                if(this.state.PositionInBOD !== ""){
                                                                                    databody = {"PositionInBOD":this.state.PositionInBOD}}
                                                                                   




                   console.log(this.state.Company_name)
     return fetch('http://localhost:5000/api/SSC/'+id, {
         method: 'PUT',
         body: JSON.stringify(databody),
         headers: {
             'Content-Type': 'application/json'
         },
     })
     .then(res => res.json())
     .then(data => console.log(data)); 
 }

    componentDidMount(){
  
        fetch('/api/SSC/all')
        .then(res => res.json())
        .then(ssc => this.setState({SSC: ssc.data},()=> console.log('the SSC Forms',this.state.SSC)));

    }
  render() {
    return (
      <div>
    <h2> SSC Forms </h2>
    <form onSubmit={this.handleSubmit}>
                <label>
                    Company_Name
                    <input type="text" name="Company_name" value={this.Company_name} onChange={this.handleCompany_nameChange}/>
                </label>
                <label>
                Governorate
                    <input type="text" name="Governorate" value={this.Governorate} onChange={this.handleGovernorateChange}/>
                </label>
                <label>
                    City
                    <input type="text" name="City" value={this.City} onChange={this.handleCityChange}/>
                </label>
              
                <label>
                    Company_Address
                    <input type="text" name="Company_Address" value={this.Company_Address} onChange={this.handleCompany_AddressChange}/>
                </label>
                <label>
                    Company_Phone_Number
                    <input type="text" name="Company_Phone_Number" value={this.Company_Phone_Number} onChange={this.handleCompany_Phone_NumberChange}/>
                </label>
                <label>
                   Fax
                    <input type="text" name="Fax" value={this.Fax} onChange={this.handleFaxChange}/>
                </label>
                <label>
                    Capital_Currency
                    <input type="text" name=" Capital_Currency" value={this. Capital_Currency} onChange={this.handleCapital_CurrencyChange}/>
                </label>
                <label>
                capital
                    <input type="text" name="capital" value={this.capital} onChange={this.handlecapitalChange}/>
                </label>
                <label>
                investorname
                    <input type="text" name="investorname" value={this.investorname} onChange={this.handleinvestornameChange}/>
                </label>
                <label>
                Investor_type
                    <input type="text" name="Investor_type" value={this.Investor_type} onChange={this.handleInvestor_typeChange}/>
                </label>
                <label>
                Gender
                    <input type="text" name="Gender" value={this.Gender} onChange={this.handleGenderChange}/>
                </label>
                <label>
                Nationality
                    <input type="text" name="Nationality" value={this.Nationality} onChange={this.handleNationalityChange}/>
                </label>
                <label>
                TypeOf_IdentityProof
                    <input type="text" name="TypeOf_IdentityProof" value={this.TypeOf_IdentityProof} onChange={this.handleTypeOf_IdentityProofChange}/>
                </label>
                <label>
                investor_nationalid
                    <input type="text" name="investor_nationalid" value={this.investor_nationalid} onChange={this.handleinvestor_nationalidChange}/>
                </label>
                <label>
                BirthDate
                    <input type="text" name="BirthDate" value={this.BirthDate} onChange={this.handleBirthDateChange}/>
                </label>
                <label>
                Address
                    <input type="text" name="Address" value={this.Address} onChange={this.handleAddressChange}/>
                </label>
                <label>
                Phone_Number
                    <input type="text" name="Phone_Number" value={this.Phone_Number} onChange={this.handlePhone_NumberChange}/>
                </label>
                <label>
                email
                    <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
                </label>
                <label>
                BOD_Name
                    <input type="text" name="BOD_Name" value={this.BOD_Name} onChange={this.handleBOD_NameChange}/>
                </label>
                <label>
                BOD_Investor_Type
                    <input type="text" name="BOD_Investor_Type" value={this.BOD_Investor_Type} onChange={this.handleBOD_Investor_TypeChange}/>
                </label>
                <label>
                BOD_Gender
                    <input type="text" name="BOD_Gender" value={this.BOD_Gender} onChange={this.handleBOD_GenderChange}/>
                </label>
                <label>
                BOD_Nationality
                    <input type="text" name="BOD_Nationality" value={this.BOD_Nationality} onChange={this.handleBOD_NationalityChange}/>
                </label>
                <label>
                BOD_TypeOfIdentityProof
                    <input type="text" name="BOD_TypeOfIdentityProof" value={this.BOD_TypeOfIdentityProof} onChange={this.handleBOD_TypeOfIdentityProofChange}/>
                </label>
                <label>
                BOD_NationalID
                    <input type="text" name="BOD_NationalID" value={this.BOD_NationalID} onChange={this.handleBOD_NationalIDChange}/>
                </label>
                <label>
                BOD_BirthDate
                    <input type="text" name="BOD_BirthDate" value={this.BOD_BirthDate} onChange={this.handleBOD_BirthDateChange}/>
                </label>
                <label>
                BOD_Address
                    <input type="text" name="BOD_Address" value={this.BOD_Address} onChange={this.handleBOD_AddressChange}/>
                </label>
                <label>
                PositionInBOD
                    <input type="text" name="PositionInBOD" value={this.PositionInBOD} onChange={this.handlePositionInBODChange}/>
                </label>

                <input type="submit" value="Add to DB" />
            </form> 
{
 <ul>
     {this.state.SSC.map( ssc  => <li key = {ssc._id}> Name: {ssc.Company_name}<button onClick= {() => {this.delete(ssc._id)}}>
      Delete </button>
      <form onClick={() => {this.update(ssc._id)}}> 
     <label>
     Company_name
     <input type="text" name="Company_name" value={this.name} onChange={this.handleCompany_nameChange}/>
     <br/>
 </label>
 <label>
      Governorate
                    <input type="text" name="Governorate" value={this.Governorate} onChange={this.handleGovernorateChange}/>
                    <br/>
                </label>
                <label>
                    City
                    <input type="text" name="City" value={this.City} onChange={this.handleCityChange}/>
                    <br/>
                </label>
              
                <label>
                    Company_Address
                    <input type="text" name="Company_Address" value={this.Company_Address} onChange={this.handleCompany_AddressChange}/>
                    <br/>
                </label>
                <label>
                    Company_Phone_Number
                    <input type="text" name="Company_Phone_Number" value={this.Company_Phone_Number} onChange={this.handleCompany_Phone_NumberChange}/>
                    <br/>
                </label>
                <label>
                   Fax
                    <input type="text" name="Fax" value={this.Fax} onChange={this.handleFaxChange}/>
                    <br/>
                </label>
                <label>
                    Capital_Currency
                    <input type="text" name=" Capital_Currency" value={this. Capital_Currency} onChange={this.handleCapital_CurrencyChange}/>
                    <br/>
                </label>
                <label>
                capital
                    <input type="text" name="capital" value={this.capital} onChange={this.handlecapitalChange}/>
                    <br/>
                </label>
                <label>
                investorname
                    <input type="text" name="investorname" value={this.investorname} onChange={this.handleinvestornameChange}/>
                    <br/>
                </label>
                <label>
                Investor_type
                    <input type="text" name="Investor_type" value={this.Investor_type} onChange={this.handleInvestor_typeChange}/>
                    <br/>
                </label>
                <label>
                Gender
                    <input type="text" name="Gender" value={this.Gender} onChange={this.handleGenderChange}/>
                    <br/>
                </label>
                <label>
                Nationality
                    <input type="text" name="Nationality" value={this.Nationality} onChange={this.handleNationalityChange}/>
                    <br/>
                </label>
                <label>
                TypeOf_IdentityProof
                    <input type="text" name="TypeOf_IdentityProof" value={this.TypeOf_IdentityProof} onChange={this.handleTypeOf_IdentityProofChange}/>
                    <br/>
                </label>
                <label>
                investor_nationalid
                    <input type="text" name="investor_nationalid" value={this.investor_nationalid} onChange={this.handleinvestor_nationalidChange}/>
                    <br/>
                </label>
                <label>
                BirthDate
                    <input type="text" name="BirthDate" value={this.BirthDate} onChange={this.handleBirthDateChange}/>
                    <br/>
                </label>
                <label>
                Address
                    <input type="text" name="Address" value={this.Address} onChange={this.handleAddressChange}/>
                    <br/>
                </label>
                <label>
                Phone_Number
                    <input type="text" name="Phone_Number" value={this.Phone_Number} onChange={this.handlePhone_NumberChange}/>
                    <br/>
                </label>
                <label>
                email
                    <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
                    <br/>
                </label>
                <label>
                BOD_Name
                    <input type="text" name="BOD_Name" value={this.BOD_Name} onChange={this.handleBOD_NameChange}/>
                    <br/>
                </label>
                <label>
                BOD_Investor_Type
                    <input type="text" name="BOD_Investor_Type" value={this.BOD_Investor_Type} onChange={this.handleBOD_Investor_TypeChange}/>
                    <br/>
                </label>
                <label>
                BOD_Gender
                    <input type="text" name="BOD_Gender" value={this.BOD_Gender} onChange={this.handleBOD_GenderChange}/>
                    <br/>
                </label>
                <label>
                BOD_Nationality
                    <input type="text" name="BOD_Nationality" value={this.BOD_Nationality} onChange={this.handleBOD_NationalityChange}/>
                    <br/>
                </label>
                <label>
                BOD_TypeOfIdentityProof
                    <input type="text" name="BOD_TypeOfIdentityProof" value={this.BOD_TypeOfIdentityProof} onChange={this.handleBOD_TypeOfIdentityProofChange}/>
                    <br/>
                </label>
                <label>
                BOD_NationalID
                    <input type="text" name="BOD_NationalID" value={this.BOD_NationalID} onChange={this.handleBOD_NationalIDChange}/>
                    <br/>
                </label>
                <label>
                BOD_BirthDate
                    <input type="text" name="BOD_BirthDate" value={this.BOD_BirthDate} onChange={this.handleBOD_BirthDateChange}/>
                    <br/>
                </label>
                <label>
                BOD_Address
                    <input type="text" name="BOD_Address" value={this.BOD_Address} onChange={this.handleBOD_AddressChange}/>
                    <br/>
                </label>
                <label>
                PositionInBOD
                    <input type="text" name="PositionInBOD" value={this.PositionInBOD} onChange={this.handlePositionInBODChange}/>
                
                    <br/></label>

                <input type="submit" value="update form" />
            </form> 
            </li>)}
     </ul> 
  
 }
      </div>
    );
  }
}


        

 




