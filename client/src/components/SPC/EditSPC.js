import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      Facility_name: "",
      Governorate: "",
      City: "",
      Facility_Address: "",
      Facility_Phone_Number: "",
      Fax: "",
      Capital_Currency: "",
      capital: "",
      investorname: "",
      Gender: "",
      Nationality: "",
      TypeOf_IdentityProof: "",
      investor_nationalid: "",
      BirthDate: "",
      Phone_Number: "",
      Investor_Fax: "",
      email: "",
      Investor_Address: "",
      spcs: []
    };
  }

  componentDidMount() {
    fetch("/api/SPC/all")
      .then(res => res.json())
      .then(SPC =>
        this.setState({ spcs: SPC.data }, () =>
          console.log("SPC fetched", this.state.spcs)
        )
      );
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleFacilityName(e) {
    this.setState({
      Facility_name: e.target.value
    });
  }
  handleGovernorate(e) {
    this.setState({
      Governorate: e.target.value
    });
  }
  handleCity(e) {
    this.setState({
      City: e.target.value
    });
  }
  handleFacilityAddress(e) {
    this.setState({
      Facility_Address: e.target.value
    });
  }
  handleFacilityPhoneNumber(e) {
    this.setState({
      Facility_Phone_Number: e.target.value
    });
  }
  handleFax(e) {
    this.setState({
      Fax: e.target.value
    });
  }
  handleCapitalCurrency(e) {
    this.setState({
      Capital_Currency: e.target.value
    });
  }
  handlecapital(e) {
    this.setState({
      capital: e.target.value
    });
  }
  handleinvestorname(e) {
    this.setState({
      investorname: e.target.value
    });
  }
  handleGender(e) {
    this.setState({
      Gender: e.target.value
    });
  }
  handleNationality(e) {
    this.setState({
      Nationality: e.target.value
    });
  }
  handleTypeOfIdentityProof(e) {
    this.setState({
      TypeOf_IdentityProof: e.target.value
    });
  }
  handleinvestornationalid(e) {
    this.setState({
      investor_nationalid: e.target.value
    });
  }
  handleBirthDate(e) {
    this.setState({
      BirthDate: e.target.value
    });
  }
  handlePhoneNumber(e) {
    this.setState({
      Phone_Number: e.target.value
    });
  }
  handleInvestorFax(e) {
    this.setState({
      Investor_Fax: e.target.value
    });
  }
  handleemail(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleInvestorAddress(e) {
    this.setState({
      Investor_Address: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  update(id) {
    console.log(this.state.Facility_name);
    let databody;
    if (this.state.Facility_name !== "") {
      databody = { Facility_name: this.state.Facility_name };
    }
    if (this.state.Governorate !== "") {
      databody = { Governorate: this.state.Governorate };
    }

    if (this.state.City !== "") {
      databody = { City: this.state.City };
    }
    if (this.state.Facility_Address !== "") {
      databody = { Facility_Address: this.state.Facility_Address };
    }
    if (this.state.Facility_Phone_Number !== "") {
      databody = { Facility_Phone_Number: this.state.Facility_Phone_Number };
    }
    if (this.state.Fax !== "") {
      databody = { Fax: this.state.Fax };
    }
    if (this.state.Capital_Currency !== "") {
      databody = { Capital_Currency: this.state.Capital_Currency };
    }
    if (this.state.capital !== "") {
      databody = { capital: this.state.capital };
    }
    if (this.state.investorname !== "") {
      databody = { investorname: this.state.investorname };
    }
    if (this.state.Gender !== "") {
      databody = { Gender: this.state.Gender };
    }
    if (this.state.Nationality !== "") {
      databody = { Nationality: this.state.Nationality };
    }
    if (this.state.TypeOf_IdentityProof !== "") {
      databody = { TypeOf_IdentityProof: this.state.TypeOf_IdentityProof };
    }
    if (this.state.investor_nationalid !== "") {
      databody = { investor_nationalid: this.state.investor_nationalid };
    }

    if (this.state.BirthDate !== "") {
      databody = { BirthDate: this.state.BirthDate };
    }
    if (this.state.Phone_Number !== "") {
      databody = { Phone_Number: this.state.Phone_Number };
    }
    if (this.state.Investor_Fax !== "") {
      databody = { Investor_Fax: this.state.Investor_Fax };
    }
    if (this.state.email !== "") {
      databody = { email: this.state.email };
    }
    if (this.state.Investor_Address !== "") {
      databody = { Investor_Address: this.state.Investor_Address };
    }
    /*if(this.state.Lawyer_review !== ""){
                                      databody = {"Lawyer_review":this.state.Lawyer_review}}*/
    console.log(this.state.Facility_name);

    return fetch("/api/SPC/" + id, {
      method: "PUT",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">New SPC Company</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Facility Name"
              value={this.state.Facility_name}
              onChange={this.handleFacilityName}
            />
          </div>
          <br />
          <div className="form-group">
            <FormControl>
              <InputLabel htmlFor="Governorate">Governorate</InputLabel> <br />
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
          <br />

          <div className="form-group">
            <FormControl>
              <InputLabel htmlFor="City">City</InputLabel> <br />
              <Select value={this.state.City} onChange={this.handleCity}>
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
                <MenuItem value={"Al-Baṣaliyah Baḥri"}>
                  Al-Baṣaliyah Baḥri
                </MenuItem>
                <MenuItem value={"Al-Bāwīṭī"}>Al-Bāwīṭī</MenuItem>
                <MenuItem value={"Al-Bāyaḍiyah"}>Al-Bāyaḍiyah</MenuItem>
                <MenuItem value={"Al-Fashn"}>Al-Fashn</MenuItem>
                <MenuItem value={"Al-Fatḥ-An-Nāṣiriyah"}>
                  Al-Fatḥ-An-Nāṣiriyah
                </MenuItem>
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
                <MenuItem value={"Al-Maḥallah al-Kubrā"}>
                  Al-Maḥallah al-Kubrā
                </MenuItem>
                <MenuItem value={"Al-Maḥmūdiyah"}>Al-Maḥmūdiyah</MenuItem>
                <MenuItem value={"Al-Manshāh"}>Al-Manshāh</MenuItem>
                <MenuItem value={"Al-Manṣūrah"}>Al-Manṣūrah</MenuItem>
                <MenuItem value={"Al-Manzilah"}>Al-Manzilah</MenuItem>
                <MenuItem value={"Al-Marāghah"}>Al-Marāghah</MenuItem>
                <MenuItem value={"Al-Maṭariyah"}>Al-Maṭariyah</MenuItem>
                <MenuItem value={"Al-Minyā"}>Al-Minyā</MenuItem>
                <MenuItem value={"Al-Minyā al-Jadīdah"}>
                  Al-Minyā al-Jadīdah
                </MenuItem>
                <MenuItem value={"Al-Qāhirah"}>Al-Qāhirah</MenuItem>
                <MenuItem value={"New Cairo"}>New Cairo</MenuItem>
                <MenuItem value={"Al-Qanāṭir al-Khayriyah"}>
                  Al-Qanāṭir al-Khayriyah
                </MenuItem>
                <MenuItem value={"Al-Qanāyāt"}>Al-Qanāyāt</MenuItem>
                <MenuItem value={"Al-Qantarah"}>Al-Qantarah</MenuItem>
                <MenuItem value={"Al-Qanṭarah Sharq"}>
                  Al-Qanṭarah Sharq
                </MenuItem>
                <MenuItem value={"Al-Qarnuh al-Jadīdah"}>
                  Al-Qarnuh al-Jadīdah
                </MenuItem>
                <MenuItem value={"Al-Qaṣāṣīn al-Jadīdah"}>
                  Al-Qaṣāṣīn al-Jadīdah
                </MenuItem>
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
                <MenuItem value={"Ar-Radīsiyah Qiblī"}>
                  Ar-Radīsiyah Qiblī
                </MenuItem>
                <MenuItem value={"Ar-Rahmaniya"}>Ar-Rahmaniya</MenuItem>
                <MenuItem value={"Ar-Rawḍah"}>Ar-Rawḍah</MenuItem>
                <MenuItem value={"Ar-Riyāḍ"}>Ar-Riyāḍ</MenuItem>
                <MenuItem value={"Ashmoun"}>Ashmoun</MenuItem>
                <MenuItem value={"Ash-Shalātīn"}>Ash-Shalātīn</MenuItem>
                <MenuItem value={"Sheikh Zayed City"}>
                  Sheikh Zayed City
                </MenuItem>
                <MenuItem value={"Sheikh Zuweid"}>Sheikh Zuweid</MenuItem>
                <MenuItem value={"Ash-Shuhadā"}>Ash-Shuhadā</MenuItem>
                <MenuItem value={"Ash-Shurūq"}>Ash-Shurūq</MenuItem>
                <MenuItem value={"Aṣ-Ṣaff"}>Aṣ-Ṣaff</MenuItem>
                <MenuItem value={"New Salhia"}>New Salhia</MenuItem>
                <MenuItem value={"As-Sallūm"}>As-Sallūm</MenuItem>
                <MenuItem value={"As-Sanṭah"}>As-Sanṭah</MenuItem>
                <MenuItem value={"As-Sarw"}>As-Sarw</MenuItem>
                <MenuItem value={"As-Sibāiyah Gharb"}>
                  As-Sibāiyah Gharb
                </MenuItem>
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
                <MenuItem value={"Az-Zayniyah Qiblī"}>
                  Az-Zayniyah Qiblī
                </MenuItem>
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
                <MenuItem value={"10th of Ramadan City"}>
                  10th of Ramadan City
                </MenuItem>
                <MenuItem value={"Madīnat as-Sādāt"}>Madīnat as-Sādāt</MenuItem>
                <MenuItem value={"Madīnat Badr"}>Madīnat Badr</MenuItem>
                <MenuItem value={"Madīnat Burj al-Arab al-Jadīdah"}>
                  Madīnat Burj al-Arab al-Jadīdah
                </MenuItem>
                <MenuItem value={"Madīnat Dumyāṭ al-Jadīdah"}>
                  Madīnat Dumyāṭ al-Jadīdah
                </MenuItem>
                <MenuItem value={"Madīnat Sittah Uktūbar"}>
                  Madīnat Sittah Uktūbar
                </MenuItem>
                <MenuItem value={"Maghāghah "}>Maghāghah</MenuItem>
                <MenuItem value={"Maḥallah Damanah"}>Maḥallah Damanah</MenuItem>
                <MenuItem value={"Mallawī "}>Mallawī </MenuItem>
                <MenuItem value={"Manfalūṭ    "}>Manfalūṭ</MenuItem>
                <MenuItem value={"Manshat al-Qanāṭir"}>
                  Manshat al-Qanāṭir
                </MenuItem>
                <MenuItem value={"Marsā Maṭrūḥ "}>Marsā Maṭrūḥ</MenuItem>
                <MenuItem value={"Mashtūl as-Sūq "}>Mashtūl as-Sūq</MenuItem>
                <MenuItem value={"Maṭāy"}>Maṭāy</MenuItem>
                <MenuItem value={"Minūf   "}>Minūf</MenuItem>
                <MenuItem value={"Minyā al-Qamḥ   "}>Minyā al-Qamḥ </MenuItem>
                <MenuItem value={"Minyat an-Naṣr  "}>Minyat an-Naṣr</MenuItem>
                <MenuItem value={"Mīt Abū Ghālb "}>Mīt Abū Ghālb </MenuItem>
                <MenuItem value={"Mīt Ghamr   "}>Mīt Ghamr </MenuItem>
                <MenuItem value={"Mīt Salsīl"}>Mīt Salsīl</MenuItem>
                <MenuItem value={"Munshāh Abū-Umar "}>
                  Munshāh Abū-Umar
                </MenuItem>
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
                <MenuItem value={"Shibīn al-Qanāṭir"}>
                  Shibīn al-Qanāṭir
                </MenuItem>
                <MenuItem value={"Shirbīn"}>Shirbīn</MenuItem>
                <MenuItem value={"Shubrā al-Khaymah"}>
                  Shubrā al-Khaymah
                </MenuItem>
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
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Facility Address"
              value={this.state.Facility_Address}
              onChange={this.handleFacilityAddress}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Facility Phone Number"
              value={this.state.Facility_Phone_Number}
              onChange={this.handleFacilityPhoneNumber}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Fax"
              value={this.state.Fax}
              onChange={this.handleFax}
            />
          </div>
          <br />
          <div className="form-group">
            <FormControl>
              <InputLabel htmlFor="Capital_Currency">
                Capital Currency
              </InputLabel>{" "}
              <br />
              <Select
                value={this.state.Capital_Currency}
                onChange={this.handleCapitalCurrency}
              >
                <MenuItem value={"Abkhazian apsar"}>Abkhazian apsar</MenuItem>
                <MenuItem value={"Russian ruble"}>Russian ruble</MenuItem>
                <MenuItem value={"Afghan afghani"}>Afghan afghani</MenuItem>
                <MenuItem value={"Albanian lek"}>Albanian lek</MenuItem>
                <MenuItem value={"Alderney pound"}>Alderney pound</MenuItem>
                <MenuItem value={"British pound"}>British pound</MenuItem>
                <MenuItem value={"Guernsey pound"}>Guernsey pound</MenuItem>
                <MenuItem value={"Algerian dinar"}>Algerian dinar</MenuItem>
                <MenuItem value={"Euro"}>Euro</MenuItem>
                <MenuItem value={"Angolan kwanza"}>Angolan kwanza</MenuItem>
                <MenuItem value={"East Caribbean dollar"}>
                  East Caribbean dollar
                </MenuItem>
                <MenuItem value={"Argentine peso"}>Argentine peso</MenuItem>
                <MenuItem value={"Armenian dram"}>Armenian dram</MenuItem>
                <MenuItem value={"Aruban florin"}>Aruban florin</MenuItem>
                <MenuItem value={"Ascension pound"}>Ascension pound</MenuItem>
                <MenuItem value={"Saint Helena pound"}>
                  Saint Helena pound
                </MenuItem>
                <MenuItem value={"Australian dollar"}>
                  Australian dollar
                </MenuItem>
                <MenuItem value={"Azerbaijani manat"}>
                  Azerbaijani manat
                </MenuItem>
                <MenuItem value={"Bahamian dollar"}>Bahamian dollar</MenuItem>
                <MenuItem value={"Bahraini dinar"}>Bahraini dinar</MenuItem>
                <MenuItem value={"Bangladeshi taka"}>Bangladeshi taka</MenuItem>
                <MenuItem value={"Barbadian dollar"}>Barbadian dollar</MenuItem>
                <MenuItem value={"Belarusian ruble"}>Belarusian ruble</MenuItem>
                <MenuItem value={"Belize dollar"}>Belize dollar</MenuItem>
                <MenuItem value={"West African CFA franc"}>
                  West African CFA franc
                </MenuItem>
                <MenuItem value={"Bermudian dollar"}>Bermudian dollar</MenuItem>
                <MenuItem value={"Bhutanese ngultrum"}>
                  Bhutanese ngultrum
                </MenuItem>
                <MenuItem value={"Indian rupee"}>Indian rupee</MenuItem>
                <MenuItem value={"Bolivian boliviano"}>
                  Bolivian boliviano
                </MenuItem>
                <MenuItem value={"Bosnia and Herzegovina convertible mark"}>
                  Bosnia and Herzegovina convertible mark
                </MenuItem>
                <MenuItem value={"Botswana pula"}>Botswana pula</MenuItem>
                <MenuItem value={"Brazilian real"}>Brazilian real</MenuItem>
                <MenuItem value={"British Virgin Islands dollar"}>
                  British Virgin Islands dollar
                </MenuItem>
                <MenuItem value={"Brunei dollar"}>Brunei dollar</MenuItem>
                <MenuItem value={"Singapore dollar"}>Singapore dollar</MenuItem>
                <MenuItem value={"Bulgarian lev"}>Bulgarian lev</MenuItem>
                <MenuItem value={"Burundian franc"}>Burundian franc</MenuItem>
                <MenuItem value={"Cambodian riel"}>Cambodian riel</MenuItem>
                <MenuItem value={"Central African CFA franc"}>
                  Central African CFA franc"
                </MenuItem>
                <MenuItem value={"Canadian dollar"}>Canadian dollar</MenuItem>
                <MenuItem value={"Cape Verdean escudo"}>
                  Cape Verdean escudo
                </MenuItem>
                <MenuItem value={"Cayman Islands dollar"}>
                  Cayman Islands dollar
                </MenuItem>
                <MenuItem value={"Chilean peso"}>Chilean peso</MenuItem>
                <MenuItem value={"Chinese yuan"}>Chinese yuan</MenuItem>
                <MenuItem value={"Colombian peso"}>Colombian peso</MenuItem>
                <MenuItem value={"Comorian franc"}>Comorian franc</MenuItem>
                <MenuItem value={"Congolese franc"}>Congolese franc</MenuItem>
                <MenuItem value={"New Zealand dollar"}>
                  New Zealand dollar
                </MenuItem>
                <MenuItem value={"Cook Islands dollar"}>
                  Cook Islands dollar
                </MenuItem>
                <MenuItem value={"Costa Rican colón"}>
                  Costa Rican colón
                </MenuItem>
                <MenuItem value={"Croatian kuna"}>Croatian kuna</MenuItem>
                <MenuItem value={"Cuban convertible peso"}>
                  Cuban convertible peso
                </MenuItem>
                <MenuItem value={"Cuban peso"}>Cuban peso</MenuItem>
                <MenuItem value={"Netherlands Antillean guilder"}>
                  Netherlands Antillean guilder
                </MenuItem>
                <MenuItem value={"Czech koruna"}>Czech koruna</MenuItem>
                <MenuItem value={"Danish krone"}>Danish krone</MenuItem>
                <MenuItem value={"Djiboutian franc"}>Djiboutian franc</MenuItem>
                <MenuItem value={"Dominican peso"}>Dominican peso</MenuItem>
                <MenuItem value={"Egyptian pound"}>Egyptian pound</MenuItem>
                <MenuItem value={"Eritrean nakfa"}>Eritrean nakfa</MenuItem>
                <MenuItem value={"Ethiopian birr"}>Ethiopian birr</MenuItem>
                <MenuItem value={"Falkland Islands pound"}>
                  Falkland Islands pound
                </MenuItem>
                <MenuItem value={"Faroese króna"}>Faroese króna</MenuItem>
                <MenuItem value={"Fijian dollar"}>Fijian dollar</MenuItem>
                <MenuItem value={"CFP franc"}>CFP franc</MenuItem>
                <MenuItem value={"Gambian dalasi"}>Gambian dalasi</MenuItem>
                <MenuItem value={"Georgian lari"}>Georgian lari</MenuItem>
                <MenuItem value={"Ghana cedi"}>Ghana cedi</MenuItem>
                <MenuItem value={"Gibraltar pound"}>Gibraltar pound</MenuItem>
                <MenuItem value={"Guatemalan quetzal"}>
                  Guatemalan quetzal
                </MenuItem>
                <MenuItem value={"Guinean franc"}>Guinean franc</MenuItem>
                <MenuItem value={"Guyanese dollar"}>Guyanese dollar</MenuItem>
                <MenuItem value={"Haitian gourde"}>Haitian gourde</MenuItem>
                <MenuItem value={"Honduran lempira"}>Honduran lempira</MenuItem>
                <MenuItem value={"Hong Kong dollar"}>Hong Kong dollar</MenuItem>
                <MenuItem value={"Hungarian forint"}>Hungarian forint</MenuItem>
                <MenuItem value={"Icelandic króna"}>Icelandic króna</MenuItem>
                <MenuItem value={"Indonesian rupiah"}>
                  Indonesian rupiah
                </MenuItem>
                <MenuItem value={"Iranian rial"}>Iranian rial</MenuItem>
                <MenuItem value={"Iraqi dinar"}>Iraqi dinar</MenuItem>
                <MenuItem value={"Manx pound"}>Manx pound</MenuItem>
                <MenuItem value={"Israeli new shekel"}>
                  Israeli new shekel
                </MenuItem>
                <MenuItem value={"Jamaican dollar"}>Jamaican dollar</MenuItem>
                <MenuItem value={"Japanese yen"}>Japanese yen</MenuItem>
                <MenuItem value={"Jersey pound"}>Jersey pound</MenuItem>
                <MenuItem value={"Jordanian dinar"}>Jordanian dinar</MenuItem>
                <MenuItem value={"Kazakhstani tenge"}>
                  Kazakhstani tenge
                </MenuItem>
                <MenuItem value={"Kenyan shilling"}>Kenyan shilling</MenuItem>
                <MenuItem value={"Kiribati dollar"}>Kiribati dollar</MenuItem>
                <MenuItem value={"North Korean won"}>North Korean won</MenuItem>
                <MenuItem value={"South Korean won"}>South Korean won</MenuItem>
                <MenuItem value={"Kuwaiti dinar"}>Kuwaiti dinar</MenuItem>
                <MenuItem value={"Kyrgyzstani som"}>Kyrgyzstani som</MenuItem>
                <MenuItem value={"Lao kip"}>Lao kip</MenuItem>
                <MenuItem value={"Lebanese pound"}>Lebanese pound</MenuItem>
                <MenuItem value={"Lesotho loti"}>Lesotho loti</MenuItem>
                <MenuItem value={"South African rand"}>
                  South African rand
                </MenuItem>
                <MenuItem value={"Liberian dollar"}>Liberian dollar</MenuItem>
                <MenuItem value={"Libyan dinar"}>Libyan dinar</MenuItem>
                <MenuItem value={"Swiss franc"}>Swiss franc</MenuItem>
                <MenuItem value={"Macanese pataca"}>Macanese pataca</MenuItem>
                <MenuItem value={"Macedonian denar"}>Macedonian denar</MenuItem>
                <MenuItem value={"Malagasy ariary"}>Malagasy ariary</MenuItem>
                <MenuItem value={"Malawian kwacha"}>Malawian kwacha</MenuItem>
                <MenuItem value={"Malaysian ringgit"}>
                  Malaysian ringgit
                </MenuItem>
                <MenuItem value={"Maldivian rufiyaa"}>
                  Maldivian rufiyaa
                </MenuItem>
                <MenuItem value={"Mauritanian ouguiya"}>
                  Mauritanian ouguiya
                </MenuItem>
                <MenuItem value={"Mauritian rupee"}>Mauritian rupee</MenuItem>
                <MenuItem value={"Mexican peso"}>Mexican peso</MenuItem>
                <MenuItem value={"Micronesian dollar"}>
                  Micronesian dollar
                </MenuItem>
                <MenuItem value={"Moldovan leu"}>Moldovan leu</MenuItem>
                <MenuItem value={"Mongolian tögrög"}>Mongolian tögrög</MenuItem>
                <MenuItem value={"Moroccan dirham"}>Moroccan dirham</MenuItem>
                <MenuItem value={"Mozambican metical"}>
                  Mozambican metical
                </MenuItem>
                <MenuItem value={"Burmese kyat"}>Burmese kyat</MenuItem>
                <MenuItem value={"Nagorno-Karabakh dram"}>
                  Nagorno-Karabakh dram
                </MenuItem>
                <MenuItem value={"Namibian dollar"}>Namibian dollar</MenuItem>
                <MenuItem value={"Nauruan dollar"}>Nauruan dollar</MenuItem>
                <MenuItem value={"Nepalese rupee"}>Nepalese rupee</MenuItem>
                <MenuItem value={"Nicaraguan córdoba"}>
                  Nicaraguan córdoba
                </MenuItem>
                <MenuItem value={"Nigerian naira"}>Nigerian naira</MenuItem>
                <MenuItem value={"Niue dollar"}>Niue dollar</MenuItem>
                <MenuItem value={"Turkish lira"}>Turkish lira</MenuItem>
                <MenuItem value={"Norwegian krone"}>Norwegian krone</MenuItem>
                <MenuItem value={"Omani rial"}>Omani rial</MenuItem>
                <MenuItem value={"Pakistani rupee"}>Pakistani rupee</MenuItem>
                <MenuItem value={"Palauan dollar"}>Palauan dollar</MenuItem>
                <MenuItem value={"Panamanian balboa"}>
                  Panamanian balboa
                </MenuItem>
                <MenuItem value={"Papua New Guinean kina"}>
                  Papua New Guinean kina
                </MenuItem>
                <MenuItem value={"Paraguayan guaraní"}>
                  Paraguayan guaraní
                </MenuItem>
                <MenuItem value={"Peruvian nuevo sol"}>
                  Peruvian nuevo sol
                </MenuItem>
                <MenuItem value={"Philippine peso"}>Philippine peso</MenuItem>
                <MenuItem value={"Pitcairn Islands dollar"}>
                  Pitcairn Islands dollar
                </MenuItem>
                <MenuItem value={"Polish złoty"}>Polish złoty</MenuItem>
                <MenuItem value={"Qatari riyal"}>Qatari riyal</MenuItem>
                <MenuItem value={"Romanian leu"}>Romanian leu</MenuItem>
                <MenuItem value={"Rwandan franc"}>Rwandan franc</MenuItem>
                <MenuItem value={"Sahrawi peseta"}>Sahrawi peseta</MenuItem>
                <MenuItem value={"Samoan tālā"}>Samoan tālā</MenuItem>
                <MenuItem value={"São Tomé and Príncipe dobra"}>
                  São Tomé and Príncipe dobra
                </MenuItem>
                <MenuItem value={"Saudi riyal"}>Saudi riyal</MenuItem>
                <MenuItem value={"Serbian dinar"}>Serbian dinar</MenuItem>
                <MenuItem value={"Seychellois rupee"}>
                  Seychellois rupee
                </MenuItem>
                <MenuItem value={"Sierra Leonean leone"}>
                  Sierra Leonean leone
                </MenuItem>
                <MenuItem value={"Solomon Islands dollar"}>
                  Solomon Islands dollar
                </MenuItem>
                <MenuItem value={"Somali shilling"}>Somali shilling</MenuItem>
                <MenuItem value={"Somaliland shilling"}>
                  Somaliland shilling
                </MenuItem>
                <MenuItem
                  value={"South Georgia and the South Sandwich Islands pound"}
                >
                  South Georgia and the South Sandwich Islands pound
                </MenuItem>
                <MenuItem value={"South Sudanese pound"}>
                  South Sudanese pound
                </MenuItem>
                <MenuItem value={"Sri Lankan rupee"}>Sri Lankan rupee</MenuItem>
                <MenuItem value={"Sudanese pound"}>Sudanese pound</MenuItem>
                <MenuItem value={"Surinamese dollar"}>
                  Surinamese dollar
                </MenuItem>
                <MenuItem value={"Swazi lilangeni"}>Swazi lilangeni</MenuItem>
                <MenuItem value={"Swedish krona"}>Swedish krona</MenuItem>
                <MenuItem value={"Syrian pound"}>Syrian pound</MenuItem>
                <MenuItem value={"New Taiwan dollar"}>
                  New Taiwan dollar
                </MenuItem>
                <MenuItem value={"Tajikistani somoni"}>
                  Tajikistani somoni
                </MenuItem>
                <MenuItem value={"Tanzanian shilling"}>
                  Tanzanian shilling
                </MenuItem>
                <MenuItem value={"Thai baht"}>Thai baht</MenuItem>
                <MenuItem value={"Tongan paʻanga"}>Tongan paʻanga</MenuItem>
                <MenuItem value={"Transnistrian ruble"}>
                  Transnistrian ruble
                </MenuItem>
                <MenuItem value={"Trinidad and Tobago dollar"}>
                  Trinidad and Tobago dollar
                </MenuItem>
                <MenuItem value={"Tristan da Cunha pound"}>
                  Tristan da Cunha pound
                </MenuItem>
                <MenuItem value={"Tunisian dinar"}>Tunisian dinar</MenuItem>
                <MenuItem value={"Turkmenistan manat"}>
                  Turkmenistan manat
                </MenuItem>
                <MenuItem value={"Tuvaluan dollar"}>Tuvaluan dollar</MenuItem>
                <MenuItem value={"Ugandan shilling"}>Ugandan shilling</MenuItem>
                <MenuItem value={"Ukrainian hryvnia"}>
                  Ukrainian hryvnia
                </MenuItem>
                <MenuItem value={"United Arab Emirates dirham"}>
                  United Arab Emirates dirham
                </MenuItem>
                <MenuItem value={"Uruguayan peso"}>Uruguayan peso</MenuItem>
                <MenuItem value={"Uzbekistani som"}>Uzbekistani som</MenuItem>
                <MenuItem value={"Vanuatu vatu"}>Vanuatu vatu</MenuItem>
                <MenuItem value={"Venezuelan bolívar"}>
                  Venezuelan bolívar
                </MenuItem>
                <MenuItem value={"Vietnamese đồng"}>Vietnamese đồng</MenuItem>
                <MenuItem value={"Yemeni rial"}>Yemeni rial</MenuItem>
                <MenuItem value={"Zambian kwacha"}>Zambian kwacha</MenuItem>
                <MenuItem value={"United States dollar"}>
                  United States dollar
                </MenuItem>
                <MenuItem value={"Zimbabwean Bond"}>Zimbabwean Bond</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Capital"
              value={this.state.capital}
              onChange={this.handlecapital}
            />
          </div>

          <br />

          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Investor Name"
              value={this.state.investorname}
              onChange={this.handleinvestorname}
            />
          </div>
          <br />
          <div className="form-group">
            <FormControl>
              <InputLabel htmlFor="Gender">Gender</InputLabel> <br />
              <Select value={this.state.Gender} onChange={this.handleGender}>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <div className="form-group">
            <FormControl>
              <InputLabel htmlFor="Nationality">Nationality</InputLabel> <br />
              <Select
                value={this.state.Nationality}
                onChange={this.handleNationality}
              >
                <MenuItem value={"Afghan"}>Afghan</MenuItem>
                <MenuItem value={"Albanian"}>Albanian</MenuItem>
                <MenuItem value={"Algerian"}>Algerian</MenuItem>
                <MenuItem value={"Argentinian"}>Argentinian</MenuItem>
                <MenuItem value={"Australian"}>Australian</MenuItem>
                <MenuItem value={"Austrian"}>Austrian</MenuItem>
                <MenuItem value={"Bangladeshi"}>Bangladeshi</MenuItem>
                <MenuItem value={"Belgian"}>Belgian</MenuItem>
                <MenuItem value={"Bolivian"}>Bolivian</MenuItem>
                <MenuItem value={"Batswana"}>Batswana</MenuItem>
                <MenuItem value={"Bulgarian"}>Bulgarian</MenuItem>
                <MenuItem value={"Cambodian"}>Cambodian</MenuItem>
                <MenuItem value={"Cameroonian"}>Cameroonian</MenuItem>
                <MenuItem value={"Canadian"}>Canadian</MenuItem>
                <MenuItem value={"Chilean"}>Chilean</MenuItem>
                <MenuItem value={"Chinese"}>Chinese </MenuItem>
                <MenuItem value={"Colombian"}>Colombian </MenuItem>
                <MenuItem value={"Costa Rican"}>Costa Rican </MenuItem>
                <MenuItem value={"Croatian"}>Croatian </MenuItem>
                <MenuItem value={"Cuban"}>Cuban </MenuItem>
                <MenuItem value={"Czech"}>Czech </MenuItem>
                <MenuItem value={"Danish"}>Danish </MenuItem>
                <MenuItem value={"Dominican"}>Dominican </MenuItem>
                <MenuItem value={"Ecuadorian"}>Ecuadorian </MenuItem>
                <MenuItem value={"Egyptian"}>Egyptian </MenuItem>
                <MenuItem value={"Salvadorian"}>Salvadorian </MenuItem>
                <MenuItem value={"English"}>English </MenuItem>
                <MenuItem value={"Estonian"}>Estonian </MenuItem>
                <MenuItem value={"Ethiopian"}>Ethiopian </MenuItem>
                <MenuItem value={"Fijian"}>Fijian </MenuItem>
                <MenuItem value={"Finnish"}>Finnish </MenuItem>
                <MenuItem value={"French"}>French </MenuItem>
                <MenuItem value={"German"}>German </MenuItem>
                <MenuItem value={"Ghanaian"}>Ghanaian </MenuItem>
                <MenuItem value={"Greek"}>Greek </MenuItem>
                <MenuItem value={"Guatemalan"}>Guatemalan</MenuItem>
                <MenuItem value={"Haitian"}>Haitian</MenuItem>
                <MenuItem value={"Honduran"}>Honduran</MenuItem>
                <MenuItem value={"Hungarian"}>Hungarian</MenuItem>
                <MenuItem value={"Icelandic"}>Icelandic</MenuItem>
                <MenuItem value={"Indian"}>Indian</MenuItem>
                <MenuItem value={"Indonesian"}>Indonesian</MenuItem>
                <MenuItem value={"Iranian"}>Iranian</MenuItem>
                <MenuItem value={"Iraqi"}>Iraqi</MenuItem>
                <MenuItem value={"Irish"}>Irish</MenuItem>
                <MenuItem value={"Israeli"}>Israeli</MenuItem>
                <MenuItem value={"Italian"}>Italian</MenuItem>
                <MenuItem value={"Jamaican"}>Jamaican</MenuItem>
                <MenuItem value={"Japanese"}>Japanese</MenuItem>
                <MenuItem value={"Jordanian"}>Jordanian</MenuItem>
                <MenuItem value={"Kenyan"}>Kenyan</MenuItem>
                <MenuItem value={"Kuwaiti"}>Kuwaiti</MenuItem>
                <MenuItem value={"Lao"}>Lao</MenuItem>
                <MenuItem value={"Latvian"}>Latvian</MenuItem>
                <MenuItem value={"Lebanese"}>Lebanese</MenuItem>
                <MenuItem value={"Libyan"}>Libyan</MenuItem>
                <MenuItem value={"Lithuanian"}>Lithuanian</MenuItem>
                <MenuItem value={"Malaysian"}>Malaysian</MenuItem>
                <MenuItem value={"Malian"}>Malian</MenuItem>
                <MenuItem value={"Maltese"}>Maltese</MenuItem>
                <MenuItem value={"Mexican"}>Mexican</MenuItem>
                <MenuItem value={"Mongolian"}>Mongolian</MenuItem>
                <MenuItem value={"Moroccan"}>Moroccan</MenuItem>
                <MenuItem value={"Mozambican"}>Mozambican</MenuItem>
                <MenuItem value={"Namibian"}>Namibian</MenuItem>
                <MenuItem value={"Nepalese"}>Nepalese</MenuItem>
                <MenuItem value={"Dutch"}>Dutch</MenuItem>
                <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
                <MenuItem value={"Nicaraguan"}>Nicaraguan</MenuItem>
                <MenuItem value={"Nigerian"}>Nigerian</MenuItem>
                <MenuItem value={"Norwegian"}>Norwegian</MenuItem>
                <MenuItem value={"Pakistani"}>Pakistani</MenuItem>
                <MenuItem value={"Panamanian"}>Panamanian</MenuItem>
                <MenuItem value={"Paraguayan"}>Paraguayan</MenuItem>
                <MenuItem value={"Peruvian"}>Peruvian</MenuItem>
                <MenuItem value={"Philippine"}>Philippine</MenuItem>
                <MenuItem value={"Polish"}>Polish</MenuItem>
                <MenuItem value={"Portuguese"}>Portuguese</MenuItem>
                <MenuItem value={"Romanian"}>Romanian</MenuItem>
                <MenuItem value={"Russian"}>Russian</MenuItem>
                <MenuItem value={"Saudi"}>Saudi</MenuItem>
                <MenuItem value={"Scottish"}>Scottish</MenuItem>
                <MenuItem value={"Senegalese"}>Senegalese</MenuItem>
                <MenuItem value={"Serbian"}>Serbian</MenuItem>
                <MenuItem value={"Singaporean"}>Singaporean</MenuItem>
                <MenuItem value={"Slovak"}>Slovak</MenuItem>
                <MenuItem value={"South African"}>South African</MenuItem>
                <MenuItem value={"Korean"}>Korean</MenuItem>
                <MenuItem value={"Spanish"}>Spanish</MenuItem>
                <MenuItem value={"Sri Lankan"}>Sri Lankan</MenuItem>
                <MenuItem value={"Sudanese"}>Sudanese</MenuItem>
                <MenuItem value={"Swedish"}>Swedish</MenuItem>
                <MenuItem value={"Swiss"}>Swiss</MenuItem>
                <MenuItem value={"Syrian"}>Syrian</MenuItem>
                <MenuItem value={"Taiwanese"}>Taiwanese</MenuItem>
                <MenuItem value={"Tajikistani"}>Tajikistani</MenuItem>
                <MenuItem value={"Thai"}>Thai</MenuItem>
                <MenuItem value={"Tongan"}>Tongan</MenuItem>
                <MenuItem value={"Tunisian"}>Tunisian</MenuItem>
                <MenuItem value={"Turkish"}>Turkish</MenuItem>
                <MenuItem value={"Ukrainian"}>Ukrainian</MenuItem>
                <MenuItem value={"Emirati"}>Emirati</MenuItem>
                <MenuItem value={"British"}>British</MenuItem>
                <MenuItem value={"American"}>American</MenuItem>
                <MenuItem value={"Uruguayan"}>Uruguayan</MenuItem>
                <MenuItem value={"Venezuelan"}>Venezuelan</MenuItem>
                <MenuItem value={"Vietnamese"}>Vietnamese</MenuItem>
                <MenuItem value={"Welsh"}>Welsh</MenuItem>
                <MenuItem value={"Zambian"}>Zambian</MenuItem>
                <MenuItem value={"Zimbabwean"}>Zimbabwean</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <div className="form-group">
            <FormControl>
              <InputLabel htmlFor="TypeOf_IdentityProof">
                Type Of Identity Proof
              </InputLabel>{" "}
              <br />
              <Select
                value={this.state.TypeOf_IdentityProof}
                onChange={this.handleTypeOfIdentityProof}
              >
                <MenuItem value={"Passport"}>Passport</MenuItem>
                <MenuItem value={"National ID"}>National ID</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="National ID"
              value={this.state.investor_nationalid}
              onChange={this.handleinvestornationalid}
            />
          </div>
          <br />
          <div className="form-group">
            <label>BirthDate: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.BirthDate}
              onChange={this.handleBirthDate}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Phone Number"
              value={this.state.Phone_Number}
              onChange={this.handlePhoneNumber}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Fax"
              value={this.state.Investor_Fax}
              onChange={this.handleInvestorFax}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Email"
              value={this.state.email}
              onChange={this.handleemail}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              label="Address"
              value={this.state.Investor_Address}
              onChange={this.handleInvestorAddress}
            />
          </div>
          <br />
          <div className="form-group">
            <ul>
              {this.state.spcs.map(spc => (
                <li key={spc._id}>
                  {" "}
                  {spc.Facility_name} <br />
                  <button
                    onClick={() => {
                      this.update(spc._id);
                    }}
                  >
                    {" "}
                    Update
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(EditSPC);
