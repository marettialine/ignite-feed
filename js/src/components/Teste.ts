// Dá erro em (users), o parâmetro users de forma automática tem o tipo any, mas um melhor tipo pode ser inferido do seu uso
// TypeScript não consegue saber que tipo é o users

interface User {
	name: string;
	bio: string;
	age: number;
}

function sumAge(users: User[]){
	// Dá erro no const, pois dentro do for estou mudando o que deveria ser uma constante
	// const sum = 0;
	let sum = 0;

	for (const user of users){
		sum += user.age
	}

	return sum;
}

// users: User[] não permite usar qualquer variável mais
// sumAge('teste');

let sumOfAllUserAges: number = sumAge([
    {
        name: 'Aline',
        bio: 'Estudante da faculdade',
        age: 21
    }
])

// Erro pois na linha anterior ele já reconheceu que o sumOfAllAges é um number
// sumOfAllUserAges = "oi";