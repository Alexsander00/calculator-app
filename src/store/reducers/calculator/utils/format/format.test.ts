import { concat, del, format, unformat } from '.'

describe('unformat function', () => {
	describe('the number doesnt have commas', () => {
		const cases = [
			['1000', '1000'],
			['1.0e+5', '1.0e+5'],
		]

		test.each(cases)('returns the same number', (number, expected) =>
			expect(unformat(number)).toBe(expected),
		)
	})

	describe('the number has commas', () => {
		const cases = [
			['1,000,000,000', '1000000000'],
			['1,000,000,000,000', '1000000000000'],
		]

		test.each(cases)('returns the number without commas', (number, expected) =>
			expect(unformat(number)).toBe(expected),
		)
	})
})

describe('format function', () => {
	describe('length is less than or equal to the max length', () => {
		describe('the number is not decimal', () => {
			const cases = [
				['1,000', '1,000'],
				['1,000,000,000', '1,000,000,000'],
				['1000000000000', '1,000,000,000,000'],
			]

			test.each(cases)('returns formatted number', (number, expected) =>
				expect(format(number)).toBe(expected),
			)
		})

		describe('the number is decimal', () => {
			const cases = [
				['1000.5121', '1,000.5121'],
				['412420.102300', '412,420.102300'],
			]

			test.each(cases)('returns formatted number', (number, expected) =>
				expect(format(number)).toBe(expected),
			)
		})
	})

	describe('length is grater than the max length', () => {
		const cases = [
			['1.34994999449e+28', '1.35e+28'],
			['24,422,201,000,401,344', '2.44e+16'],
			['241239618662188475', '2.41e+17'],
		]

		test.each(cases)(
			'returns the number in its exponential form',
			(number, expected) => expect(format(number)).toBe(expected),
		)
	})
})

describe('del function', () => {
	const cases = [
		['1000', '100'],
		['101,234', '10,123'],
		['101,234.200', '101,234.20'],
	]

	test.each(cases)(
		'returns the number without the last character',
		(number, expected) => expect(del(number)).toBe(expected),
	)

	describe('the number is 0', () => {
		it('returns 0', () => expect(del('0')).toBe('0'))
	})
})

describe('concat function', () => {
	describe('length is less than the max length', () => {
		const cases = [
			['100', '0', '1,000'],
			['520,1230,02,463', '0', '5,201,230,024,630'],
		]

		test.each(cases)(
			'returns the number with the input as the last character',
			(number, input, expected) => expect(concat(number, input)).toBe(expected),
		)
	})

	describe('length is equal to the max length', () => {
		const cases = [
			['1230000000000', '0', '1230000000000'],
			['4,520,123,002,463', '0', '4,520,123,002,463'],
		]

		test.each(cases)('returns the same number', (number, input, expected) =>
			expect(concat(number, input)).toBe(expected),
		)
	})
})
