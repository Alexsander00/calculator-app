export enum Operations {
	Sum = '+',
	Subtraction = '-',
	Multiplication = 'x',
	Division = '/',
	None = '',
}

export interface IOperation {
	id: number
	firstValue: string
	secondValue: string
	type: Operations
	result: string
}

export enum Buttons {
	Number = 'Number',
	Operation = 'Operation',
	Special = 'Special',
	Equals = 'Equals',
	None = '',
}
