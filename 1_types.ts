//  Bollen
const boolenTrue: boolean = true;
const boolenFalse: boolean = false;

// Number
const unt: number = 13;
const float: number = 1.3;

// String
const message: string = 'Hello TypeScript';

// Array
const numberArray1: number[] = [1, 2, 3, 4, 5, 6];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple
const contact: [string, number] = ['TypeScript', 123456];

// Any
let variable: any = 43;
variable = 'TypeScript';

// ====
function sayMyname(name: string): void {
	console.log(name);
}

sayMyname('TypeScript');

// Never
function throwError(message: string): never {
	throw new Error(message);
}

function infinite(): never {
	while (true) {}
}

// Type
type Login = string;
const login1: Login = 'admin';
// const login2: Login = 2;

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true

type SomeType = string | null | undefined;
