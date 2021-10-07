const faker = require('faker');

module.exports = {
    checkoutInfo: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        zipCode: faker.address.zipCode(),
    }
}