const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      Facility_name: Joi.string()
      .min(2)
      .required(),
    Governorate: Joi.string()
      .valid(
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
      )
      .required(),
    City: Joi.string()
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
      .required(),
    Facility_Address: Joi.string().required(),
    Facility_Phone_Number: Joi.string(),
    Fax: Joi.string(),
    Capital_Currency: Joi.string()
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
      .required(),
    capital: Joi.number()
      .integer()
      .min(50000)
      .max(999999999999)
      .required(),
    investorname: Joi.string()
      .min(3)
      .required(),

    Gender: Joi.valid("Female", "Male"),
    Nationality: Joi.valid(
      "Afghan",
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
      "Zimbabwean"
    ).required(),
    TypeOf_IdentityProof: Joi.valid("Passport", "NationalID").required(),
    investor_nationalid: Joi.string()
      .min(14)
      .max(14)
      .required(),
    BirthDate: Joi.date().required(),
    Investor_Address: Joi.string().required(),
    Phone_Number: Joi.string().max(11),
    email: Joi.string(),
    Investor_Fax: Joi.string(),
    Form_Date: Joi.string(),
    Status: Joi.string()

    }

    return Joi.validate(request, createSchema)
}, 

    updateValidation: request => {
      
        const updateSchema = {
            Facility_name: Joi.string().required(),
            Governorate: Joi
  
          .string()
  
          .valid(
  
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
  
          )
  
          .required(),
          City: Joi
  
          .string()
  
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
  
            "Fāraskūr ",
  
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
  
            "Manfalūṭ ",
  
            "Manshat al-Qanāṭir",
  
            "Marsā Maṭrūḥ ",
  
            "Mashtūl as-Sūq ",
  
            "Maṭāy",
  
            "Minūf ",
  
            "Minyā al-Qamḥ ",
  
            "Minyat an-Naṣr ",
  
            "Mīt Abū Ghālb ",
  
            "Mīt Ghamr ",
  
            "Mīt Salsīl",
  
            "Munshāh Abū-Umar ",
  
            "Dakhla",
  
            "Muṭūbis",
  
            "Nabarūh ",
  
            "Naj-Ḥammādī",
  
            "Naqādah ",
  
            "Nāṣir Būsh",
  
            "Qahā ",
  
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
  
          .required(),
          Facility_Address: Joi.string().required(),
          Facility_Phone_Number: Joi.string(),
          Fax: Joi.string(),
          Capital_Currency: Joi
  
          .string()
  
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
  
          .required(),
          capital: Joi.number(),
          investorname: Joi.string().required(),
          Gender: Joi.valid("Female", "Male"),
          Nationality: Joi
  
          .valid(
  
            " Afghan ",
  
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
  
            " Libyan ",
  
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
  
            " Zimbabwean "
  
          )
  
          .required(),
          TypeOf_IdentityProof: Joi.valid("National_ID", "passport").required(),
          investor_nationalid: Joi.string().min(14).max(14).required(),
          BirthDate: Joi.date().required(),
          Phone_Number: Joi.string().max(13),
          Investor_Fax: Joi.string(),
          email: Joi.string(),
          Investor_Address: Joi.string().min(3).required(),
          Form_Date: Joi.string(),
          Status: Joi.string()

  
      
  
        }

        return Joi.validate(request, updateSchema)
    }, 
}