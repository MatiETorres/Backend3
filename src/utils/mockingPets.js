export const generateMockPets = (num) => {
    const pets = [];
    for (let i = 0; i < num; i++) {
        pets.push({
            name: `Pet${i}`,
            type: Math.random() > 0.5 ? 'dog' : 'cat',
            age: Math.floor(Math.random() * 10) + 1
        });
    }
    return pets;
};