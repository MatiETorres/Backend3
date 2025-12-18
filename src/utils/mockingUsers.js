import bcrypt from 'bcrypt';

export const generateMockUsers = (num) => {
    const users = [];
    const password = bcrypt.hashSync('coder123', 10);

    for (let i = 0; i < num; i++) {
        users.push({
            first_name: `User${i}`,
            last_name: `Mock${i}`,
            email: `user${i}@mock.com`,
            password,
            role: Math.random() > 0.5 ? 'user' : 'admin',
            pets: []
        });
    }
    return users;
};