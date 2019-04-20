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
  class CreatingPayment extends Component {
    constructor(){
        super();
  
        this.handleCard_type =  this.handleCard_type.bind(this);
        this.handleCard_no =  this.handleCard_no.bind(this);
        this.handleAmount =  this.handleAmount.bind(this);
        this.handleFirstname =  this.handleFirstname.bind(this);
        this.handleLastname=  this.handleLastname.bind(this) ;
        this.handleEmail=  this.handleEmail.bind(this);
        this.handlePhone_number=  this.handlePhone_number.bind(this);
        this.handleStreet_Address=  this.handleStreet_Address.bind(this);
        this.handleCity=  this.handleCity.bind(this);
        this.handleState_Region=  this.handleState_Region.bind(this);
        this.handleExpire_date=  this.handleExpire_date.bind(this);
        this.handleCVC=  this.handleCVC.bind(this);
        this.handleCountry=  this.handleCountry.bind(this);
        this.handlePostal_Zipcode=  this.handlePostal_Zipcode.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.state ={
            payment:[],
            Card_type : "",
            Card_no:"",
            Amount:"",	
            Firstname:	"",	
            Lastname:""	,	
            Email:	"",	
            Phone_number:"",	
            Street_Address:"",	
  
            City:	"",	
            State_Region:""	,	
  
            Expire_date:"" 	,
            CVC:"",
            Country:"",
            Postal_Zipcode:""
           
        }
    
    }
    handleCard_type(e){
        this.setState({Card_type: e.target.value })
    
      }
      handleCard_no(e){
        this.setState({Card_no: e.target.value })
    
      }
      handleAmount(e){
        this.setState({Amount: e.target.value })
    
      }
      handleFirstname(e){
        this.setState({Firstname: e.target.value })
    
      }
      handleLastname(e){
        this.setState({Lastname: e.target.value })
    
      }
      handleEmail(e){
        this.setState({Email: e.target.value })
    
      }
      handlePhone_number(e){
        this.setState({Phone_number: e.target.value })
    
      }
      handleStreet_Address(e){
        this.setState({Street_Address: e.target.value })
    
      }
    
      handleCity(e){
        this.setState({City: e.target.value })
    
      }
      handleState_Region(e){
        this.setState({State_Region: e.target.value })
    
      }
      handleExpire_date(e){
        this.setState({Expire_date: e.target.value })
    
      }
      handleCVC(e){
        this.setState({CVC: e.target.value })
    
      }
      handleCountry(e){
        this.setState({Country: e.target.value })
    
      }
      handlePostal_Zipcode(e){
        this.setState({Postal_Zipcode: e.target.value })
    
      }  
      handleSubmit(e){
        e.preventDefault();
        let databody = {
            "Card_type":this.state.Card_type,	
    "Card_no":this.state.Card_no,	
    "Amount":this.state.Amount,	
    "Firstname":	this.state.Firstname,	
    "Lastname":	this.state.Lastname,	
    "Email":	this.state.Email,	
    "Phone_number":	this.state.Phone_number,	
    "City":this.state.City,	
    "Street_Address":	this.state.Street_Address,	
    "State_Region":	this.state.State_Region,	
    "Expire_date": 	this.state.Expire_date,	
    "CVC":this.state.CVC,
    "Country":this.state.Country,
    "Postal_Zipcode":this.state.Postal_Zipcode,
        
}
 return fetch('/api/payment/', {
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
       

        return (
          <div style={{ marginTop: 10 }}>
              <h3 align="center">New Payment</h3>
              <form onSubmit={this.handleSubmit}>

              
              <div className="form-group">
                    <label> Card No:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state. Card_no}
                      onChange={this.handleCard_no}
                      />
                      </div>

              <div className="form-group">
                    <label> Card type:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Card_type}
                      onChange={this.handleCard_type}
                      />
                      </div>

                      <div className="form-group">
                    <label> Amount:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Amount}
                      onChange={this.handleAmount}
                      />
                      </div>

                      <div className="form-group">
                    <label> Firstname:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Firstname}
                      onChange={this.handleFirstname}
                      />
                      </div>

                      <div className="form-group">
                    <label> Lastname:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Lastname}
                      onChange={this.handleLastname}
                      />
                      </div>


                      <div className="form-group">
                    <label> Email:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Email}
                      onChange={this.handleEmail}
                      />
                      </div>


                      <div className="form-group">
                    <label> Phone number:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Phone_number}
                      onChange={this.handlePhone_number}
                      />
                      </div>


                      <div className="form-group">
                    <label> Street Address:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Street_Address}
                      onChange={this.handleStreet_Address}
                      />
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
                    <label> State Region:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.State_Region}
                      onChange={this.handleState_Region}
                      />
                      </div>

                      <div className="form-group">
                    <label> Expire_date:  </label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={this.state.Expire_date}
                      onChange={this.handleExpire_date}
                      />
                      </div>

                      <div className="form-group">
                    <label> CVC:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.CVC}
                      onChange={this.handleCVC}
                      />
                      </div>

                      <div className="form-group">
                    <label>Country:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Country}
                      onChange={this.handleCountry}
                      />
                      </div>

                      <div className="form-group">
                    <label>Postal Zipcode:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Postal_Zipcode}
                      onChange={this.handlePostal_Zipcode}
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
export default withStyles (styles)(CreatingPayment);
