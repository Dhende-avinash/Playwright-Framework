import { faker } from "@faker-js/faker";

export const createUser =()=>
{
    return{
        fullName : faker.person.fullName(),
        email : faker.internet.email(),
        password : faker.internet.password(),

        day : faker.number.int({min:1, max:20}).toString(),
        month : faker.number.int({min:1,max:12}).toString(),
        year: faker.number.int({min:1950, max:2021}).toString(),

        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),

        address1 : faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        city:faker.location.city(),
        state : faker.location.state(),
        //zipCode : faker.location.zipCode(),
        zipCode: faker.string.numeric(6),

        //mobileNumber: '9'+faker.phone.number(),
        mobileNumber: '9' + faker.string.numeric(9),
    }
}