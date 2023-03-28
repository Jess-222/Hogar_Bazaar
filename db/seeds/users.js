const { User } = require('../../models');

const user_data = [
    {
        "username": "Sal",
        "email": "sal@hotmail.com",
        "password": "password12345",
        "phone": "1234567"
    },
    {
        "username": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password12345",
        "phone": "7654321"
    },
    {
        "username": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "password12345",
        "phone": "9876543"
    },
    {
        "username": "Jordan",
        "email": "jordan99@msn.com",
        "password": "password12345",
        "phone": "3456789"
    },
    {
        "username": "Blake",
        "email": "the_blake@yahoo.com",
        "password": "password12345",
        "phone": "1122337"
    }
]

const seedUsers = () => User.bulkCreate(user_data, {individualHooks: true, returning: true,});

module.exports = seedUsers;