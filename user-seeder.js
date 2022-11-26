const User = require('./models/user');
const users = [
    {
        name: 'Rakesh Mehra',
        age: 37
    },
    {
        name: "Bhavik Mojidra",
        age: 23
    },
    {
        name: 'Yagnesh Patel',
        age: 24
    },
    {
        name: 'Rohit Mehra',
        age: 30
    }
];

(async () => {
    for (const user of users) {
        await User.create({
            name: user.name,
            age: user.age
        })
    }
    console.log('user data seeded');
})()