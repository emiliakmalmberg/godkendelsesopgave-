class user{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}
module.exports=user 

class paymentUser extends user{
    constructor(pinNumber, cardName,cvvCode){
        this.pinNumber=pinNumber;
        this.cardName=cardName;
        this.cvvCode=cvvCode;
    }
}
//min undertype af freeuser, hvor man så kun skal opgive brugeroplysninger og ingen kreditkort oplysninger
class freeUser extends user{
    constructor(userName, password,email){
        this.userName=userName;
        this.password=password;
        this.email=email;
}
    }

class interest{
        constructor(hobbies,sexualPreference){
            this.hobbies=hobbies;
            this.sexualPreference=sexualPreference;
        }
    }
module.exports=interest 


class match{
    constructor(idofuserone,idofusertwo){
        this.idofuserone=idofuserone;
        this.idofusertwo=idofusertwo;
    }
}
module.exports=match 

class image{
    constructor(type,size){
        this.type=type;
        this.size=size;
    }
}
