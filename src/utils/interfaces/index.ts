export interface Address {
  street :string,
  number:number,
  zipcode:string,
}
export interface User {
name:string,
age:number,
address: Address
}