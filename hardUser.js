const user = require('./models/user')

let userArray = []

let user1 = new user ('Bente', '30', 'female');
let user2 = new user ('Ib', '32', 'male');

userArray = [user1, user2];

module.exports = userArray;