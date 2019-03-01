const uuid = require('uuid')

// The User Model
class reviewer {
    constructor(name, age, gender, yearsofexp, password) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.yearsofexp = yearsofexp;
        this.password = password;
        this.id = uuid.v4();
    };
};

module.exports = reviewer 
