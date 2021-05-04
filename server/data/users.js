import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@exmaple.com',
        password: bcrypt.hashSync('pass', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johndoe@exmaple.com',
        password: bcrypt.hashSync('pass', 10)
    },
    {
        name: 'Jane Doe',
        email: 'janedoe@exmaple.com',
        password: bcrypt.hashSync('pass', 10)
    }
]

module.exports = users