const animals = ['anteater', 'koala bear', 'giraffe', 'leopard', 'crocodile', 'octopus', 'bear', 'dinosaur', 'toucan', 'sloth'];

const adjectives = ['weird', 'solitary', 'adaptable', 'exuberant', 'reliable', 'brave', 'clever', 'greedy', 'selfish', 'rude'];

const actions = ['sleeps', 'shouts', 'stings', 'runs', 'sings', 'climbs', 'laughs', 'walks', 'bites', 'eats'];

const affinity = ['a great friend to', 'an inseparable friend to', 'a fearful enemy for', 'a completely indifferent species towards', 'the worst enemy for', 'scared of', 'amused by', 'funny for', 'a great imitator of', 'a role model for'];

const ourAnimal = {
    animal: 'animal',
    character: 'adjective',
    habit: 'action',
    affinity: 'affinity'
};

let message = `The ${ourAnimal.animal} is a very ${ourAnimal.character} animal which ${ourAnimal.habit} a lot and, in turn, it tends to be ${ourAnimal.affinity} humans.`;

console.log(message);