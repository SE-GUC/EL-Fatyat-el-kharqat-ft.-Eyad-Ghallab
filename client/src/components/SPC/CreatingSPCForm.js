import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class CreatingSPCForm extends Component {

 constructor() {
    super();
    this.handleFacilityName = this.handleFacilityName.bind(this);
    this.handleGovernorate = this.handleGovernorate.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleFacilityAddress = this.handleFacilityAddress.bind(this);
    this.handleFacilityPhoneNumber = this.handleFacilityPhoneNumber.bind(this);
    this.handleFax = this.handleFax.bind(this);
    this.handleCapitalCurrency = this.handleCapitalCurrency.bind(this);
    this.handlecapital = this.handlecapital.bind(this);
    this.handleinvestorname = this.handleinvestorname.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleNationality = this.handleNationality.bind(this);
    this.handleTypeOfIdentityProof = this.handleTypeOfIdentityProof.bind(this);
    this.handleinvestornationalid = this.handleinvestornationalid.bind(this);
    this.handleBirthDate = this.handleBirthDate.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleInvestorFax = this.handleInvestorFax.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handleInvestorAddress = this.handleInvestorAddress.bind(this);
    //this.handleLawyer_review=this.handleLawyer_review.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = { 
      Facility_name: '',
     Governorate: '',
      City:'',
      Facility_Address: '',
      Facility_Phone_Number: '',
      Fax: '',
      Capital_Currency: ["Abkhazian apsar",
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
      capital: '',
      investorname:'',
      Gender: '',
      Nationality: [ "Afghan",
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
      TypeOf_IdentityProof: ["Passport","National ID"],
      investor_nationalid: '',
      BirthDate: '',
      Phone_Number: '',
      Investor_Fax:'',
      email:'',
      Investor_Address:'',
      //Lawyer_review:""
    
   }
 }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleFacilityName(e) {
    this.setState({
      Facility_name: e.target.value
    });
  }
  handleGovernorate(e) {
    this.setState({
      Governorate: e.target.value
    })  
  }
  handleCity(e) {
    this.setState({
      City: e.target.value
    })
  }
handleFacilityAddress(e){
    this.setState({
        Facility_Address: e.target.value
      })
}
handleFacilityPhoneNumber(e){
    this.setState({
        Facility_Phone_Number: e.target.value
      })
}
handleFax(e){
    this.setState({
        Fax: e.target.value
      })
}
handleCapitalCurrency(e){
    this.setState({
        Capital_Currency: e.target.value
      })
}
handlecapital(e){
    this.setState({
        capital: e.target.value
      })
}
handleinvestorname(e){
    this.setState({
        investorname: e.target.value
      })
}
handleGender(e){
    this.setState({
        Gender: e.target.value
      })
}
handleNationality(e){
    this.setState({
        Nationality: e.target.value
      })
}
handleTypeOfIdentityProof(e){
    this.setState({
        TypeOf_IdentityProof: e.target.value
      })
}
handleinvestornationalid(e){
    this.setState({
        investor_nationalid: e.target.value
      })
}
handleBirthDate(e){
    this.setState({
        BirthDate: e.target.value
      })
}
handlePhoneNumber(e){
    this.setState({
        Phone_Number: e.target.value
      })
}
handleInvestorFax(e){
    this.setState({
        Investor_Fax: e.target.value
      })
}
handleemail(e){
    this.setState({
        email: e.target.value
      })

}
handleInvestorAddress(e){
    this.setState({
        Investor_Address: e.target.value
      })
}
/*handleLawyer_review(e){
  this.setState({
      Lawyer_review: e.target.value
    })
  }*/
  handleSubmit(e) {
    e.preventDefault();
    let databody  = {
      Facility_name: this.state.Facility_name,
      Governorate: this.state.Governorate,
      City: this.state.City,
      Facility_Address: this.state.Facility_Address,
      Facility_Phone_Number: this.state.Facility_Phone_Number,
      Fax: this.state.Fax,
      Capital_Currency: this.state.Capital_Currency,
      capital: this.state.capital,
      investorname:this.state.investorname,
      Gender: this.state.Gender,
      Nationality: this.state.Nationality,
      TypeOf_IdentityProof: this.state.TypeOf_IdentityProof,
      investor_nationalid: this.state.investor_nationalid,
      BirthDate: this.state.BirthDate,
      Phone_Number: this.state.Phone_Number,
      Investor_Fax:this.state.Investor_Fax,
      email:this.state.email,
      Investor_Address:this.state.Investor_Address,
      //Lawyer_review:this.state.Lawyer_review
    };

    return fetch('/api/SPC/', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
    
    
    
    
  }
 
  render() {
   
  
    let capitalcurrencyOptions=this.state.Capital_Currency.map(Capital_Currency => {
        return <option key = {Capital_Currency} value="Capital_Currency">{Capital_Currency}</option>
    })
    let nationalityOptions=this.state.Nationality.map(Nationality => {
        return <option key = {Nationality} value = "Nationality">{Nationality}</option>
    });
  
    let typeOptions=this.state.TypeOf_IdentityProof.map(TypeOf_IdentityProof => {
      return <option key = {TypeOf_IdentityProof} value = "TypeOf_IdentityProof">{TypeOf_IdentityProof}</option>
  });
  
    
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">New SPC Company</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Facility Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Facility_name}
                      onChange={this.handleFacilityName}
                      />
                      </div>
                      <div className="form-group">

                      <FormControl >
          <InputLabel htmlFor="Governorate">Governorate</InputLabel> <br/>
          <Select
            value={this.state.Governorate}
            onChange={this.handleGovernorate}
           
          >
            <MenuItem value={"cairo"}>Cairo</MenuItem>
            <MenuItem value={"Alex"}>Alex</MenuItem>
            <MenuItem value={"Ismalia"}>Ismalia</MenuItem>
            <MenuItem value={"aswan"}>Aswan</MenuItem>
            <MenuItem value={"luxor"}>Luxor</MenuItem>
            <MenuItem value={"Domiat"}>Domiat</MenuItem>
            <MenuItem value={"Elbahr elahmar"}>El Bahr El Ahmar</MenuItem>
            <MenuItem value={"asiut"}>Asiut</MenuItem>
            <MenuItem value={"Damnhor"}>Damnhor</MenuItem>
            <MenuItem value={"Bne sweif"}>Bne Sweif</MenuItem>
            <MenuItem value={"Bor saed"}>Bor Saed</MenuItem>
            <MenuItem value={"Giza"}>Giza</MenuItem>
            <MenuItem value={"ganob sina"}>Ganob Sina</MenuItem>
            <MenuItem value={"suez"}>Suez</MenuItem>
            <MenuItem value={"faioum"}>Faioum</MenuItem>
            <MenuItem value={"qena"}>Qena</MenuItem>
            <MenuItem value={"banha"}>Banha</MenuItem>
            <MenuItem value={"kafr elsheikh"}>Kafr El Sheikh</MenuItem>
            <MenuItem value={"monofia"}>Monofia</MenuItem>
            <MenuItem value={"elmenia"}>El Menia</MenuItem>
            <MenuItem value={"elwadi elgedid"}>El Wadi El Gedid</MenuItem>
            <MenuItem value={"Qlioubia"}>Qlioubia</MenuItem>
            <MenuItem value={"Gharbia "}>Gharbia</MenuItem>
            <MenuItem value={"Sharaaia"}>Sharaaia</MenuItem>
          </Select>
        </FormControl>
        </div>
        

            <div className="form-group">

                <FormControl >
          <InputLabel htmlFor="City">City</InputLabel> <br/>
          <Select
            value={this.state.City}
            onChange={this.handleCity}
           
          >
            <MenuItem value={"Abnūb"}>Abnūb</MenuItem>
            <MenuItem value={"Abū al-Maṭāmīr"}>Abū al-Maṭāmīr</MenuItem>
            <MenuItem value={"Abū an-Numrus"}>Abū an-Numrus</MenuItem>
            <MenuItem value={"Abū Ḥammād"}>Abū Ḥammād</MenuItem>
            <MenuItem value={"Abū Ḥummuṣ"}>Abū Ḥummuṣ</MenuItem>
            <MenuItem value={"Abū Kabīr"}>Abū Kabīr</MenuItem>
            <MenuItem value={"Abū Qurqās"}>Abū Qurqās</MenuItem>
            <MenuItem value={"Abū Ṣuwayr"}>Abū Ṣuwayr</MenuItem>
            <MenuItem value={"Abū Tīj"}>Abū Tīj</MenuItem>
            <MenuItem value={"Abū Tisht"}>Abū Tisht</MenuItem>
            <MenuItem value={"Aḍ-Ḍabah"}>Aḍ-Ḍabah</MenuItem>
            <MenuItem value={"Ad-Dilinjāt"}>Ad-Dilinjāt</MenuItem>
            <MenuItem value={"Ajā"}>Ajā</MenuItem>
            <MenuItem value={"Akhmīm"}>Akhmīm</MenuItem>
            <MenuItem value={"Al-Arīsh"}>Al-Arīsh</MenuItem>
            <MenuItem value={"Al-Ayyāṭ"}>Al-Ayyāṭ</MenuItem>
            <MenuItem value={"Al-Badārī"}>Al-Badārī</MenuItem>
            <MenuItem value={"Al-Badrashayn"}>Al-Badrashayn</MenuItem>
            <MenuItem value={"Al-Bājūr"}>Al-Bājūr</MenuItem>
            <MenuItem value={"Al-Balyanā"}>Al-Balyanā</MenuItem>
            <MenuItem value={"Al-Baṣaliyah Baḥri"}>Al-Baṣaliyah Baḥri</MenuItem>
            <MenuItem value={"Al-Bāwīṭī"}>Al-Bāwīṭī</MenuItem>
            <MenuItem value={"Al-Bāyaḍiyah"}>Al-Bāyaḍiyah</MenuItem>
            <MenuItem value={"Al-Fashn"}>Al-Fashn</MenuItem>
            <MenuItem value={"Al-Fatḥ-An-Nāṣiriyah"}>Al-Fatḥ-An-Nāṣiriyah</MenuItem>
            <MenuItem value={"Al-Fayyūm"}>Al-Fayyūm</MenuItem>
            <MenuItem value={"Al-Ghanāyim "}>Al-Ghanāyim</MenuItem>
            <MenuItem value={"Al-Ghurdaqah"}>Al-Ghurdaqah</MenuItem>
            <MenuItem value={"Al-Ḥammām"}>Al-Ḥammām</MenuItem>
            <MenuItem value={"Al-Ḥāmūl"}>Al-Ḥāmūl</MenuItem>
            <MenuItem value={"Al-Ḥawāmidiyah"}>Al-Ḥawāmidiyah</MenuItem>
            <MenuItem value={"Al-Ḥusayniyah"}>"Al-Ḥusayniyah</MenuItem>
            <MenuItem value={"Al-Ibrāhīmiyah"}>Al-Ibrāhīmiyah</MenuItem>
            <MenuItem value={"Al-Idwah"}>Al-Idwah</MenuItem>
            <MenuItem value={"Al-Iskandariyah"}>Al-Iskandariyah</MenuItem>
            <MenuItem value={"Al-Ismāīliyah"}>Al-Ismāīliyah</MenuItem>
            <MenuItem value={"Al-Jamāliyah"}>Al-Jamāliyah</MenuItem>
            <MenuItem value={"Al-Jīzah "}>Al-Jīzah </MenuItem>
            <MenuItem value={"Al-Khānkah"}>Al-Khānkah</MenuItem>
            <MenuItem value={"Al-Khārijah"}>Al-Khārijah</MenuItem>
            <MenuItem value={"Al-Khuṣūṣ"}>Al-Khuṣūṣ</MenuItem>
            <MenuItem value={"Al-Kurdy"}>Al-Kurdy</MenuItem>
            <MenuItem value={"Al-Maḥallah al-Kubrā"}>Al-Maḥallah al-Kubrā</MenuItem>
            <MenuItem value={"Al-Maḥmūdiyah"}>Al-Maḥmūdiyah</MenuItem>
            <MenuItem value={"Al-Manshāh"}>Al-Manshāh</MenuItem>
            <MenuItem value={"Al-Manṣūrah"}>Al-Manṣūrah</MenuItem>
            <MenuItem value={"Al-Manzilah"}>Al-Manzilah</MenuItem>
            <MenuItem value={"Al-Marāghah"}>Al-Marāghah</MenuItem>
            <MenuItem value={"Al-Maṭariyah"}>Al-Maṭariyah</MenuItem>
            <MenuItem value={"Al-Minyā"}>Al-Minyā</MenuItem>
            <MenuItem value={"Al-Minyā al-Jadīdah"}>Al-Minyā al-Jadīdah</MenuItem>
            <MenuItem value={"Al-Qāhirah"}>Al-Qāhirah</MenuItem>
            <MenuItem value={"New Cairo"}>New Cairo</MenuItem>
            <MenuItem value={"Al-Qanāṭir al-Khayriyah"}>Al-Qanāṭir al-Khayriyah</MenuItem>
            <MenuItem value={"Al-Qanāyāt"}>Al-Qanāyāt</MenuItem>
            <MenuItem value={"Al-Qantarah"}>Al-Qantarah</MenuItem>
            <MenuItem value={"Al-Qanṭarah Sharq"}>Al-Qanṭarah Sharq</MenuItem>
            <MenuItem value={"Al-Qarnuh al-Jadīdah"}>Al-Qarnuh al-Jadīdah</MenuItem>
            <MenuItem value={"Al-Qaṣāṣīn al-Jadīdah"}>Al-Qaṣāṣīn al-Jadīdah</MenuItem>
            <MenuItem value={"Al-Qurayn"}>Al-Qurayn</MenuItem>
            <MenuItem value={"Al-Quṣayr"}>Al-Quṣayr</MenuItem>
            <MenuItem value={"Al-Qūṣiyah"}>Al-Qūṣiyah</MenuItem>
            <MenuItem value={"Al-Ubūr"}>Al-Ubūr</MenuItem>
            <MenuItem value={"Luxor"}>Luxor</MenuItem>
            <MenuItem value={"Al-Waqf "}>Al-Waqf</MenuItem>
            <MenuItem value={"Al-Wāsiṭā"}>Al-Wāsiṭā</MenuItem>
            <MenuItem value={"El Negaila"}>El Negaila</MenuItem>
            <MenuItem value={"An-New Nubariya"}>An-New Nubariya</MenuItem>
            <MenuItem value={"Armant"}>Armant</MenuItem>
            <MenuItem value={"Ar-Radīsiyah Qiblī"}>Ar-Radīsiyah Qiblī</MenuItem>
            <MenuItem value={"Ar-Rahmaniya"}>Ar-Rahmaniya</MenuItem>
            <MenuItem value={"Ar-Rawḍah"}>Ar-Rawḍah</MenuItem>
            <MenuItem value={"Ar-Riyāḍ"}>Ar-Riyāḍ</MenuItem>
            <MenuItem value={"Ashmoun"}>Ashmoun</MenuItem>
            <MenuItem value={"Ash-Shalātīn"}>Ash-Shalātīn</MenuItem>
            <MenuItem value={"Sheikh Zayed City"}>Sheikh Zayed City</MenuItem>
            <MenuItem value={"Sheikh Zuweid"}>Sheikh Zuweid</MenuItem>
            <MenuItem value={"Ash-Shuhadā"}>Ash-Shuhadā</MenuItem>
            <MenuItem value={"Ash-Shurūq"}>Ash-Shurūq</MenuItem>
            <MenuItem value={"Aṣ-Ṣaff"}>Aṣ-Ṣaff</MenuItem>
            <MenuItem value={"New Salhia"}>New Salhia</MenuItem>
            <MenuItem value={"As-Sallūm"}>As-Sallūm</MenuItem>
            <MenuItem value={"As-Sanṭah"}>As-Sanṭah</MenuItem>
            <MenuItem value={"As-Sarw"}>As-Sarw</MenuItem>
            <MenuItem value={"As-Sibāiyah Gharb"}>As-Sibāiyah Gharb</MenuItem>
            <MenuItem value={"El Senbellawein"}>El Senbellawein</MenuItem>
            <MenuItem value={"Suez"}>Suez</MenuItem>
            <MenuItem value={"Aswān"}>Aswān</MenuItem>
            <MenuItem value={"Asyut"}>Asyut</MenuItem>
            <MenuItem value={"Aṭfīḥ"}>Aṭfīḥ</MenuItem>
            <MenuItem value={"At-Tall al-Kabīr"}>At-Tall al-Kabīr</MenuItem>
            <MenuItem value={"Aṭ-Ṭūd"}>Aṭ-Ṭūd</MenuItem>
            <MenuItem value={"El Tor"}>El Tor</MenuItem>
            <MenuItem value={"Awlād Ṣaqr"}>Awlād Ṣaqr</MenuItem>
            <MenuItem value={"Awsīm"}>Awsīm</MenuItem>
            <MenuItem value={"Zagazig"}>Zagazig</MenuItem>
            <MenuItem value={"Az-Zarqā"}>Az-Zarqā</MenuItem>
            <MenuItem value={"Az-Zayniyah Qiblī"}>Az-Zayniyah Qiblī</MenuItem>
            <MenuItem value={"Badr"}>Badr</MenuItem>
            <MenuItem value={"Balṭīm"}>Balṭīm</MenuItem>
            <MenuItem value={"Banhā"}>Banhā</MenuItem>
            <MenuItem value={"Beni Mazar"}>Beni Mazar</MenuItem>
            <MenuItem value={"Beni Suef"}>Beni Suef</MenuItem>
            <MenuItem value={"New Beni Suef"}>New Beni Suef</MenuItem>
            <MenuItem value={"Banī Ubayd"}>Banī Ubayd</MenuItem>
            <MenuItem value={"Basyoun"}>Basyoun</MenuItem>
            <MenuItem value={"Bibā"}>Bibā</MenuItem>
            <MenuItem value={"Bilbays"}>Bilbays</MenuItem>
            <MenuItem value={"Belqas"}>Belqas</MenuItem>
            <MenuItem value={"Bīr al-Abd"}>Bīr al-Abd</MenuItem>
            <MenuItem value={"Birket el-Sab"}>Birket el-Sab</MenuItem>
            <MenuItem value={"Biyalā"}>Biyalā</MenuItem>
            <MenuItem value={"Burj al-Arab"}>Burj al-Arab</MenuItem>
            <MenuItem value={"Burj al-Barlus"}>Burj al-Barlus</MenuItem>
            <MenuItem value={"Port Said"}>Port Said</MenuItem>
            <MenuItem value={"Damanhour"}>Damanhour</MenuItem>
            <MenuItem value={"Dar as-Salām"}>Dar as-Salām</MenuItem>
            <MenuItem value={"Daraw"}>Daraw</MenuItem>
            <MenuItem value={"Dayr Mawās"}>Dayr Mawās</MenuItem>
            <MenuItem value={"Dairut"}>Dairut</MenuItem>
            <MenuItem value={"Dikirnis"}>Dikirnis</MenuItem>
            <MenuItem value={"Dishnā"}>Dishnā</MenuItem>
            <MenuItem value={"Desouk"}>Desouk</MenuItem>
            <MenuItem value={"Diyarb Najm"}>Diyarb</MenuItem>
            <MenuItem value={"Dumyāṭ "}>Dumyāṭ</MenuItem>
            <MenuItem value={"Fayid "}>Fayid</MenuItem>
            <MenuItem value={"Faqous"}>Faqous</MenuItem>
            <MenuItem value={"Fāraskūr  "}>Fāraskūr</MenuItem>
            <MenuItem value={"Farshūṭ "}>Farshūṭ</MenuItem>
            <MenuItem value={"Fuwah "}>Fuwah</MenuItem>
            <MenuItem value={"Ḥawsh-Īsā"}>Ḥawsh-Īsā</MenuItem>
            <MenuItem value={"Hihyā"}>Hihyā</MenuItem>
            <MenuItem value={"Ibsheway"}>Ibsheway</MenuItem>
            <MenuItem value={"Edfu"}>Edfu</MenuItem>
            <MenuItem value={"Idkū"}>Idkū</MenuItem>
            <MenuItem value={"Ihnāsiyā"}>Ihnāsiyā</MenuItem>
            <MenuItem value={"Isnā"}>Isnā</MenuItem>
            <MenuItem value={"Iṭsā"}>Iṭsā</MenuItem>
            <MenuItem value={"Ityāy al-Bārūd"}>Ityāy al-Bārūd</MenuItem>
            <MenuItem value={"Izbat al-Burj"}>Izbat al-Burj</MenuItem>
            <MenuItem value={"Girga"}>Girga</MenuItem>
            <MenuItem value={"Juhaynah"}>Juhaynah</MenuItem>
            <MenuItem value={"Kafr ad-Dawwār"}>Kafr ad-Dawwār</MenuItem>
            <MenuItem value={"Kafr al-Baṭṭīkh"}>Kafr al-Baṭṭīkh</MenuItem>
            <MenuItem value={"Kafr el-Sheikh"}>Kafr el-Sheikh</MenuItem>
            <MenuItem value={"Kafr az-Zayyāt"}>Kafr az-Zayyāt</MenuItem>
            <MenuItem value={"Kafr Saad"}>Kafr Saad</MenuItem>
            <MenuItem value={"Kafr Ṣaqr"}>Kafr Ṣaqr</MenuItem>
            <MenuItem value={"Kafr Shukr"}>Kafr Shukr</MenuItem>
            <MenuItem value={"Kawm Ḥamādah"}>Kawm Ḥamādah</MenuItem>
            <MenuItem value={"Kawm Umbū"}>Kawm Umbū</MenuItem>
            <MenuItem value={"Kirdāsah"}>Kirdāsah</MenuItem>
            <MenuItem value={"10th of Ramadan City"}>10th of Ramadan City</MenuItem>
            <MenuItem value={"Madīnat as-Sādāt"}>Madīnat as-Sādāt</MenuItem>
            <MenuItem value={"Madīnat Badr"}>Madīnat Badr</MenuItem>
            <MenuItem value={"Madīnat Burj al-Arab al-Jadīdah"}>Madīnat Burj al-Arab al-Jadīdah</MenuItem>
            <MenuItem value={"Madīnat Dumyāṭ al-Jadīdah"}>Madīnat Dumyāṭ al-Jadīdah</MenuItem>
            <MenuItem value={"Madīnat Sittah Uktūbar"}>Madīnat Sittah Uktūbar</MenuItem>
            <MenuItem value={"Maghāghah "}>Maghāghah</MenuItem>
            <MenuItem value={"Maḥallah Damanah"}>Maḥallah Damanah</MenuItem>
            <MenuItem value={"Mallawī "}>Mallawī </MenuItem>
            <MenuItem value={"Manfalūṭ    "}>Manfalūṭ</MenuItem>
            <MenuItem value={"Manshat al-Qanāṭir"}>Manshat al-Qanāṭir</MenuItem>
            <MenuItem value={"Marsā Maṭrūḥ "}>Marsā Maṭrūḥ</MenuItem>
            <MenuItem value={"Mashtūl as-Sūq "}>Mashtūl as-Sūq</MenuItem>
            <MenuItem value={"Maṭāy"}>Maṭāy</MenuItem>
            <MenuItem value={"Minūf   "}>Minūf</MenuItem>
            <MenuItem value={"Minyā al-Qamḥ   "}>Minyā al-Qamḥ </MenuItem>
            <MenuItem value={"Minyat an-Naṣr  "}>Minyat an-Naṣr</MenuItem>
            <MenuItem value={"Mīt Abū Ghālb "}>Mīt Abū Ghālb </MenuItem>
            <MenuItem value={"Mīt Ghamr   "}>Mīt Ghamr </MenuItem>
            <MenuItem value={"Mīt Salsīl"}>Mīt Salsīl</MenuItem>
            <MenuItem value={"Munshāh Abū-Umar "}>Munshāh Abū-Umar</MenuItem>
            <MenuItem value={"Dakhla"}>Dakhla</MenuItem>
            <MenuItem value={"Muṭūbis"}>Muṭūbis</MenuItem>
            <MenuItem value={"Nabarūh "}>Nabarūh</MenuItem>
            <MenuItem value={"Naj-Ḥammādī"}>Naj-Ḥammādī</MenuItem>
            <MenuItem value={"Naqādah "}>Naqādah</MenuItem>
            <MenuItem value={"Nāṣir Būsh"}>Nāṣir Būsh</MenuItem>
            <MenuItem value={"Qahā   "}>Qahā</MenuItem>
            <MenuItem value={"Qallīn "}>Qallīn</MenuItem>
            <MenuItem value={"Qalyūb"}>Qalyūb</MenuItem>
            <MenuItem value={"Qifṭ"}>Qifṭ</MenuItem>
            <MenuItem value={"Qinā"}>Qinā</MenuItem>
            <MenuItem value={"Qūṣ"}>Qūṣ</MenuItem>
            <MenuItem value={"Quṭūr"}>Quṭūr</MenuItem>
            <MenuItem value={"Quwaysinā"}>Quwaysinā</MenuItem>
            <MenuItem value={"Rafaḥ"}>Rafaḥ</MenuItem>
            <MenuItem value={"Rās al-Bar"}>Rās al-Bar</MenuItem>
            <MenuItem value={"Ras Ghārib "}>Ras Ghārib </MenuItem>
            <MenuItem value={"Rashīd"}>Rashīd</MenuItem>
            <MenuItem value={"Safājā"}>Safājā</MenuItem>
            <MenuItem value={"Sāḥīl Salim"}>Sāḥīl Salim</MenuItem>
            <MenuItem value={"Samālūṭ"}>Samālūṭ</MenuItem>
            <MenuItem value={"Samannūd"}>Samannūd</MenuItem>
            <MenuItem value={"Ṣān al-Ḥajar"}>Ṣān al-Ḥajar</MenuItem>
            <MenuItem value={"Sāqultah"}>Sāqultah</MenuItem>
            <MenuItem value={"Sawhāj"}>Sawhāj</MenuItem>
            <MenuItem value={"Sharm ash-Shaykh"}>Sharm ash-Shaykh</MenuItem>
            <MenuItem value={"Shibīn al-Kawm"}>Shibīn al-Kawm</MenuItem>
            <MenuItem value={"Shibīn al-Qanāṭir"}>Shibīn al-Qanāṭir</MenuItem>
            <MenuItem value={"Shirbīn"}>Shirbīn</MenuItem>
            <MenuItem value={"Shubrā al-Khaymah"}>Shubrā al-Khaymah</MenuItem>
            <MenuItem value={"Shubrākhīt"}>Shubrākhīt</MenuItem>
            <MenuItem value={"Ṣidfā"}>Ṣidfā</MenuItem>
            <MenuItem value={"Sīdī Barrānī"}>Sīdī Barrānī</MenuItem>
            <MenuItem value={"Sīdī Ghāzī"}>Sīdī Ghāzī</MenuItem>
            <MenuItem value={"Sīdī Sālim"}>Sīdī Sālim</MenuItem>
            <MenuItem value={"Sinnūris"}>Sinnūris</MenuItem>
            <MenuItem value={"Sirs al-Layyānah"}>Sirs al-Layyānah</MenuItem>
            <MenuItem value={"Sīwa"}>Sīwa</MenuItem>
            <MenuItem value={"Sumusṭā al-Waqf"}>Sumusṭā al-Waqf</MenuItem>
            <MenuItem value={"Ṭahṭā"}>Ṭahṭā</MenuItem>
            <MenuItem value={"Talā"}>Talā</MenuItem>
            <MenuItem value={"Ṭalkhā"}>Ṭalkhā</MenuItem>
            <MenuItem value={"Tama al-Āmdīd"}>Tama al-Āmdīd</MenuItem>
            <MenuItem value={"Ṭāmiyah"}>Ṭāmiyah</MenuItem>
            <MenuItem value={"Ṭanṭā"}>Ṭanṭā</MenuItem>
            <MenuItem value={"Ṭimā"}>Ṭimā</MenuItem>
            <MenuItem value={"Ṭūkh"}>Ṭūkh</MenuItem>
            <MenuItem value={"Natron Valley"}>Natron Valley</MenuItem>
            <MenuItem value={"Yūsuf aṣ-Ṣiddīq"}>Yūsuf aṣ-Ṣiddīq</MenuItem>
            <MenuItem value={"Ziftā"}>Ziftā</MenuItem>
          </Select>
        </FormControl> 
               </div>
                <div className="form-group">
                    <label>Facility Address:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Facility_Address}
                      onChange={this.handleFacilityAddress}
                      />
                </div>
                <div className="form-group">
                    <label>Facility Phone Number:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Facility_Phone_Number}
                      onChange={this.handleFacilityPhoneNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Fax:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Fax}
                      onChange={this.handleFax}
                      />
                </div>
                
                <div className="form-group">
                          <label>Capital Currency:</label> <br/>
                          <select ref = "Capital_Currency">
                          {capitalcurrencyOptions}</select>
                      </div>
                
                <div className="form-group">
                    <label>Capital:  </label>
                    <input 
                      type="number" 
                      className="form-control" 
                      value={this.state.capital}
                      onChange={this.handlecapital}
                      />
                </div>
                <div className="form-group">
                    <label>Investor Name:  </label>
                    <input 
                      type="test" 
                      className="form-control" 
                      value={this.state.investorname}
                      onChange={this.handleinvestorname}
                      />
                </div>
                <FormControl >
          <InputLabel htmlFor="Gender">Gender</InputLabel> <br/>
          <Select
            value={this.state.Gender}
            onChange={this.handleGender}
           
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
          </Select>
        </FormControl>
               
               
               <div className="form-group">
                          <label>Nationality:</label> <br/>
                          <select ref = "Nationality">
                          {nationalityOptions}</select>
                      </div>
                       {/* className="form-control"
                      value={this.state.Nationality}
                      onChange={this.onChangeNationality}
                      /> */}
                
                <div className="form-group">
                          <label>Type of identity proof:</label> <br/>
                          <select ref = "TypeOf_IdentityProof">
                          {typeOptions}</select>
                      </div>
                     
                
                <div className="form-group">
                    <label>National ID:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.investor_nationalid}
                      onChange={this.handleinvestornationalid}
                      />
                </div>
                <div className="form-group">
                    <label>BirthDate:  </label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={this.state.BirthDate}
                      onChange={this.handleBirthDate}
                      />
                </div>
                <div className="form-group">
                    <label> Phone Number:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Phone_Number}
                      onChange={this.handlePhoneNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Fax:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Investor_Fax}
                      onChange={this.handleInvestorFax}
                      />
                </div>
                <div className="form-group">
                    <label>Email:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.email}
                      onChange={this.handleemail}
                      />
                </div>
                <div className="form-group">
                    <label>Address:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Investor_Address}
                      onChange={this.handleInvestorAddress}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Submit" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
 export default withStyles (styles)(CreatingSPCForm);