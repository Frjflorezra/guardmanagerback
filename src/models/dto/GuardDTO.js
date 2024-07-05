export class ShowGuardDTO {
    id;
    first_name;
    last_name;
    cellphone;
    email;
    address;
    username;

    constructor({ id, first_name, last_name, cellphone, email, address, username }){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.cellphone = cellphone;
        this.email = email;
        this.address = address;
        this.username = username
    }
}

export class CreateGuardDTO {
    first_name;
    last_name;
    cellphone;
    email;
    username;
    password;
    address;

    constructor({ first_name, last_name, cellphone, email, username, password, address }){
        this.first_name = first_name;
        this.last_name = last_name;
        this.cellphone = cellphone;
        this.email = email;
        this.username = username;
        this.password = password;
        this.address = address;
    }

    validateAttributes(){
        for(const key in this){
            if(!this[key]){
                console.log(key);
                return false
            }
        }
        return true
    }
}

export class UpdateGuardDTO extends CreateGuardDTO {}

// export class UpdateGuardDTO {
//     id;
//     first_name;
//     last_name;
//     cellphone;
//     email;
//     address;

//     constructor({ id, first_name, last_name, cellphone, email, address }){
//         this.id = id;
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.cellphone = cellphone;
//         this.email = email;
//         this.address = address;
//     }
// }