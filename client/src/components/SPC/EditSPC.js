
import React, { Component } from 'react';

 class EditSPC extends Component {
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
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update=this.update.bind(this);

        this.state = { 
          Facility_name: '',
         Governorate: [ "cairo",
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
        
         "Sharaaia"],
          City:[
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
        ],
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
          Gender: ['Female','Male'],
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
          TypeOf_IdentityProof: ["Passport", "National ID"],
          investor_nationalid: '',
          BirthDate: '',
          Phone_Number: '',
          Investor_Fax:'',
          email:'',
          Investor_Address:'',
          spcs:[],
        
       }
     }
     update(id){
      console.log(this.state.Facility_name)
      let databody 
    if (this.state.Facility_name !== ""){
    databody = {"Facility_name":this.state.Facility_name}}
    if(this.state.Governorate !== ""){
    databody = {"Governorate":this.state.Governorate}}
    
    if(this.state.City !== ""){
      databody = {"City":this.state.City}}
      if(this.state.Facility_Address !== ""){
        databody = {"Facility_Address":this.state.Facility_Address}}
        if(this.state.Facility_Phone_Number !== ""){
          databody = {"Facility_Phone_Number":this.state.Facility_Phone_Number}}
          if(this.state.Fax !== ""){
            databody = {"Fax":this.state.Fax}}
            if(this.state.Capital_Currency !== ""){
              databody = {"Capital_Currency":this.state.Capital_Currency}}
              if(this.state.capital !== ""){
                databody = {"capital":this.state.capital}}
                if(this.state.investorname !== ""){
                  databody = {"investorname":this.state.investorname}}
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
                            if(this.state.Phone_Number !== ""){
                              databody = {"Phone_Number":this.state.Phone_Number}}
                              if(this.state.Investor_Fax !== ""){
                                databody = {"Investor_Fax":this.state.Investor_Fax}}
                                if(this.state.email !== ""){
                                  databody = {"email":this.state.email}}
                                  if(this.state.Investor_Address !== ""){
                                    databody = {"Investor_Address":this.state.Investor_Address}}
                    console.log(this.state.username)
    
       return fetch('/api/SPC/'+id, {
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
      fetch('/api/SPC')
      .then(res => res.json())
      .then(SPC => this.setState({spcs: SPC.data}, () => console.log('SPC fetched',this.state.spcs)));
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
      Investor_Address:this.state.Investor_Address
    };}
//     axios.post('http://localhost:5000/SPC/'+this.props.match.params.id, databody)
//     .then(res => console.log(res.data));

// this.props.history.push('/index');



render() {
  let governorateOptions=this.state.Governorate.map(governorate => {
    return <option key = {governorate} value="governorate">{governorate}</option>
})
let cityOptions=this.state.City.map(city => {
    return <option key = {city} value = "city">{city}</option>
});
let capitalcurrencyOptions=this.state.Capital_Currency.map(capitalcurrency => {
    return <option key = {capitalcurrency} value="capitalcurrency">{capitalcurrency}</option>
})
let nationalityOptions=this.state.Nationality.map(nationality => {
    return <option key = {nationality} value = "nationality">{nationality}</option>
});
let typeOptions=this.state.TypeOf_IdentityProof.map(type => {
    return <option key = {type} value = "type">{type}</option>
});
let genderOptions=this.state.Gender.map(gender => {
    return <option key = {gender} value = "gender">{gender}</option>
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
                      <label>Governorate:</label> <br/>
                      <select ref = "governorate">
                      {governorateOptions}</select>
                  </div>
                  <div className="form-group">
                      <label>City:</label> <br/>
                      <select ref = "city"
                    //   value={this.state.City}
                    //   onChange={this.onChangeCity}
                         >
                      {cityOptions}</select>
                        
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
                      <select ref = "capitalcurrency">
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
            <div className="form-group">
                      <label>Gender:</label> <br/>
                      <select ref = "gender">
                      {genderOptions}</select>
                  </div>
            
                  
           
           <div className="form-group">
                      <label>Nationality:</label> <br/>
                      <select ref = "nationality">
                      {nationalityOptions}</select>
                  </div>
                 
            
            <div className="form-group">
                      <label>Type of identity proof:</label> <br/>
                      <select ref = "type">
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
            <ul>
          {this.state.spcs.map(spc =>
            <li key = {spc._id}
            > {spc.Facility_name} <br/><button onClick = {() => {this.update(spc._id)}}> Update</button> 
            </li>
            )}
        </ul>
            {/* <div className="form-group">
                <input type="submit" 
                  value="Update" 
                  className="btn btn-primary"/>
            </div> */}
        </form>
    </div>
)
}
} 
export default EditSPC;
