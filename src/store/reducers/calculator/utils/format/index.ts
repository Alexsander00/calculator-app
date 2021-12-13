const maxLength = 13

export function unformat(number: string) {
	return number.replace(/,/g, '')
}

function addCommas(number: string) {
	return number
		.split('')
		.reverse()
		.map((current, index) => {
			if (index === 0) return current
			if (index % 3 !== 0) return current

			return `${current},`
		})
		.reverse()
		.join('')
}

export function format(number: string) {
	if (number.toLowerCase() === 'infinity' || number.toLowerCase() === 'nan')
		return number

	if (number.includes('e') && number.length > maxLength)
		return parseFloat(number).toPrecision(3)

	if (number.includes('e')) return number

	const unformatted = unformat(number)

	if (unformatted.replace('.', '').length > maxLength)
		return parseFloat(unformatted).toPrecision(3)

	if (unformatted.includes('.')) {
		const beforeDecimal = unformatted.substring(0, unformatted.indexOf('.'))
		const decimal = unformatted.substring(unformatted.indexOf('.'))

		return addCommas(beforeDecimal).concat(decimal)
	}

	return addCommas(unformatted)
}

export function del(number: string) {
	if (number === '0' || number.length === 1) return '0'

	return format(number.slice(0, -1))
}

export function concat(number: string, digit: string) {
	if (number.includes('.') && digit === '.') return number

	const concatValue = unformat(number).replace('.', '').concat(digit)

	if (concatValue.length > maxLength) return number

	return format(number.concat(digit))
}
