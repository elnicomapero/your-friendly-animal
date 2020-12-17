const animals = ['anteater', 'koala bear', 'giraffe', 'leopard', 'crocodile', 'octopus', 'bear', 'dinosaur', 'toucan', 'sloth'];

const adjectives = ['weird', 'solitary', 'adaptable', 'exuberant', 'reliable', 'brave', 'clever', 'greedy', 'selfish', 'rude'];

const actions = ['sleeps', 'shouts', 'stings', 'runs', 'sings', 'climbs', 'laughs', 'walks', 'bites', 'eats'];

const affinity = ['a great friend to', 'an inseparable friend to', 'a fearful enemy for', 'a completely indifferent species towards', 'the worst enemy for', 'scared of', 'amused by', 'funny for', 'a great imitator of', 'a role model for'];

// A function that selects a random element of an array. This allows to add, remove or modify arrays. 
const randomize = arr => {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
};

// This functions creates a random custom animal baing on each of the attributes (arrays) passed as args. The returning object should be customized should we add or remove arrays.
const makeAnimal = (animal, character, habit, affinity) => {
    const myAnimal = {
        animal: randomize(animal),
        character: randomize(character),
        habit: randomize(habit),
        affinity: randomize(affinity),
    };
    return myAnimal;
};

// Creates a specific instance of an animal.
const myAnimal = makeAnimal(animals, adjectives, actions, affinity)

// The final message, That hardcoded part should be customized every time an array is added or removed.
const message = `The ${myAnimal.animal} is a very ${myAnimal.character} animal which ${myAnimal.habit} a lot and, in turn, it tends to be ${myAnimal.affinity} humans.`;

// Logs message to the console.
console.log(message);