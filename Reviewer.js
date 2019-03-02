
class Reviewer {
    constructor(Name, ID, Email,Username , Password , YearsOfExperience , Gender) {
        this.Name = Name;
        this.Email=Email;
        this.Gender = Gender;
        this.YearsOfExperience = YearsOfExperience;
        this.Username= Username;
        this.Password = Password;
        this.ID= ID;
    };
};

module.exports = Reviewer 

// The Reviewer Model
//const uuid = require('uuid');
class Reviewer {
    constructor(Name,ID, Email,Username,Password, YearsOfExperience,Gender) {
        this.Name = Name;
        this.ID=ID;
        this.Email = Email;
        this.Username=Username;
        this.Password=Password;
        this.YearsOfExperience = YearsOfExperience;
        this.Gender=Gender;
    };
}

//module.exports = Reviewer;

