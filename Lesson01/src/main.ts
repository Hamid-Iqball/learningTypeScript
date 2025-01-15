// let userName = "Hamid iqbal here"
// console.log(userName)

// let a: number = 12;
// let b:string ="4"
// let c:number =5;

// // JavasScript used dyanimc types and therefore it coersed the data becasue it usedd the dynamic type instead of static type.

// console.log(a/b)

//Lesson 02
/*
let myName:string = "Hamid";
let meaningOfLife:number;
let isLoading:boolean;
let album:number | string;// Union type. this can me more than one data type.

myName="Iqbal";
meaningOfLife=42;
isLoading=true;
album=1982

const sum =(a:number,b:number)=>{
    return a+b;
}
*/

//#########Lesson 03: Objects, Array ############

/*
let stringArr = ['one','two','three']
let cities = ['psh','isb','lhe', 1923]
let mixedDATA=['evh', 1923, true]

cities =mixedDATA; //This is not acceptible in TS
mixedDATA=cities //This is acceptiable in TS.

stringArr.push("2")

let test =[];
let bands:string[]=[]

//Tupple : If want to be strict about the lenght of an array or the order of type of data.
let myTupple:[string,number,boolean] = ["dav",3,false] // This is tupple
let mixed = ['dav',4,true] // This is union
//myTupple = mixed  one is tupple and other one is union , The tupple is not assignable to union because in union there are no restriction on order.

// #########Objects #########
let myObj:object
myObj =[]
console.log(typeof myObj)

myObj = cities

const example = {
    prop1:"Dave",
    prop2:true,
}

example.prop1 = "jhon"


//This is convenient because we define types in advance for our object.
interface Guitarist {
    name?:string,
    active:boolean,  // Now this is optional.
    album:(string | number)[]
}

// Interface can be extending like in classes and it is also used for defining the shape of an object type allow defining complex types using unions and intersection.
let evh:Guitarist = {
    name:"Hamid",
    active:false,
    album:["1980", 2024,454]

}
let jp:Guitarist = {
    name:"iqbal",
    active:true,
    album:["1980",4,"3"]

}
jp = evh // No issue with this because both objects have the same type of key value pairs.
console.log(evh)

const greetGuitarist = (guitarist:Guitarist)=>{

    if(guitarist.name){
        return `Hello Mr ${guitarist.name.toUpperCase()}`
    }
    return `Hello`

}

console.log(greetGuitarist(jp))



// ########## Enums ########
//Unlike most Typescript features, Enums are not a type-level addition to JavaScript but something added yo the language and runtime.

enum Grade {
    U=1,
    D,
    C,
    B,
    A,
}

console.log(Grade.A)




//######################################
//       Aliases and Type Literals
//######################################

//Type Aliases: Type Aliases allow us to give name to any type, whether it is built-in, a user-defined type, or a complex combination of types. once defined the Alias can be used like any other type throughout your code, making it easier to read,write and maiantain.

type stringOrNumber = string |  number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?:string,
    active:boolean,  // Now this is optional.
    album:stringOrNumberArray
}

type userId = stringOrNumber  // This is how we use one type Alias as type for another TypeAliace.We can not do this with interface it can only be done with type.

//Literal Types
let myName:"Hamid"
let userName: "Hamid"|"iQBAL"|"AZHAR"

//Type literals and Aliases can possibly make our cide DRY(don't repeat yourself)


//######################################
//             Functions
//######################################

const add = (a:number, b:number):number =>{
    return a+b
}

//Any function that does not have an explicit return is void which essentialy means there is no return at all. It indicate that the purpose of this function is to perform side effect, e.g logging to the console or updating a variable, rather than returning data.
const logMsg = (message:any): void=>{
    console.log(message)
}

console.log(logMsg("heyeeee"))

let subtract = function (c:number,d:number):number{
return c-d
}

//Type Aliase  
type mathFunction = (a:number, b:number) => number
// interface mathFunction { (a:number, b:number):number } /Iterface is also an option. but type Alias suits it.
console.log(subtract(3,1))


let multiply:mathFunction = function (c,d){
    return c*d
}

console.log(multiply(2,4))


//Optional parameters: optional parameter should be the last in the list 

const addAll = (a:number, b:number, c?:number)=>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b

}


//Default Parameter: we can give any param
const sumAll = (a:number=10, b:number, c:number=2)=>{
    return a+b+c
}

logMsg(addAll(1,2,3))
logMsg(sumAll(1,2))
logMsg(sumAll(undefined,4)) // InOrder to skip the first number
//Default value will not work if we work with a function signature.

//Reset parameters: The reset operator should comes at the end as well.
const total = (a:number,...nums:number[]):number=>{
return a+nums.reduce((prev,cur)=>(prev+cur))
}

logMsg(total(2,1,2,3,4,4))


//Never type: This is for function that explicitly throw error, or if a function has infinite loop inside then the type will also be never. And if there is no explicit retun the type of that function will be void.

const isNumber = (value:any):boolean=>{
    return typeof value === 'number'?true:false
}


const numberOrSyring = (value:number|string):string =>{
    if (typeof value === 'string') return 'string'
    if(isNumber(value)) return "number"

    
}


1) Type Aliases
2)Functions
3) Never type

*/


//###################################################
//         Type Assertion || Type Casting
//###################################################

//Some time you will have information about the type of a value that TypeScript can't know about, this come into way when we are working with the DOM.

type One = string
type two = number | string
type Three = 'hello'

//Convert to more or less specific 

let a:One = 'hello'
let b=a as two // less specific type
let c = a as Three // more specific


let d = <One>'world'
let e = <string | number>'world'

let addOrConcat = (a:number, b:number,c:'add' | "concat"):number =>{

}