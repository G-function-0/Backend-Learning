function delayedCall(fn : () => void){
    setTimeout(fn,1000);
}

delayedCall(function() {
    console.log("hello")
})


interface User {
    name:string,
    age:number,
    email:string,
    password:number,
}

type UserUp = Pick<User, 'name' | 'age' | 'email'>; 


type UsersAge = Record<string,{name:string, age:number}>;
const users : UsersAge = {
    "reh": {
        name:"ujjawal",
        age:23,
    }
    ,
    "ehh" : {
        name:"gaurav",
        age:23
    }
}

console.log(users["reh"]?.name);