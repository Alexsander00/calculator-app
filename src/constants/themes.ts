import { DefaultTheme } from 'styled-components'

export const Theme1: DefaultTheme = {
	main: {
		background: 'hsl(222, 26%, 31%)',
		text: 'hsl(0, 0%, 100%)',
	},
	switch: {
		background: 'hsl(223, 31%, 20%)',
		toggle: 'hsl(6, 63%, 50%)',
	},
	display: {
		background: 'hsl(224, 36%, 15%)',
	},
	keyPad: {
		background: 'hsl(223, 31%, 20%)',
		keys: {
			normal: {
				background: 'hsl(30, 25%, 89%)',
				shadow: 'hsl(28, 16%, 65%)',
				text: 'hsl(221, 14%, 31%)',
			},
			special: {
				background: 'hsl(225, 21%, 49%)',
				shadow: 'hsl(224, 28%, 35%)',
				text: 'hsl(0, 0%, 100%)',
			},
			equals: {
				background: 'hsl(6, 63%, 50%)',
				shadow: 'hsl(6, 70%, 34%)',
				text: 'hsl(0, 0%, 100%)',
			},
		},
	},
	history: {
		background: 'hsl(223, 37%, 15%)',
		items: {
			background: 'hsl(223, 31%, 20%)',
		},
	},
}

export const Theme2: DefaultTheme = {
	main: {
		background: 'hsl(0, 0%, 90%)',
		text: 'hsl(60, 10%, 19%)',
	},
	switch: {
		background: 'hsl(0, 5%, 81%)',
		toggle: 'hsl(25, 98%, 40%)',
	},
	display: {
		background: 'hsl(0, 0%, 93%)',
	},
	keyPad: {
		background: 'hsl(0, 5%, 81%)',
		keys: {
			normal: {
				background: 'hsl(45, 7%, 89%)',
				shadow: 'hsl(35, 11%, 61%)',
				text: 'hsl(60, 10%, 19%)',
			},
			special: {
				background: 'hsl(185, 42%, 37%)',
				shadow: 'hsl(185, 58%, 25%)',
				text: 'hsl(0, 0%, 100%)',
			},
			equals: {
				background: 'hsl(25, 98%, 40%)',
				shadow: 'hsl(25, 99%, 27%)',
				text: 'hsl(0, 0%, 100%)',
			},
		},
	},
	history: {
		background: 'hsl(0, 0%, 93%)',
		items: {
			background: 'hsl(0, 5%, 81%)',
		},
	},
}

export const Theme3: DefaultTheme = {
	main: {
		background: 'hsl(268, 75%, 9%)',
		text: 'hsl(52, 100%, 62%)',
	},
	switch: {
		background: 'hsl(268, 71%, 12%)',
		toggle: 'hsl(176, 100%, 44%)',
	},
	display: {
		background: 'hsl(268, 71%, 12%)',
	},
	keyPad: {
		background: 'hsl(268, 71%, 12%)',
		keys: {
			normal: {
				background: 'hsl(268, 47%, 21%)',
				shadow: 'hsl(290, 70%, 36%)',
				text: 'hsl(52, 100%, 62%)',
			},
			special: {
				background: 'hsl(281, 89%, 26%)',
				shadow: 'hsl(285, 91%, 52%)',
				text: 'hsl(0, 0%, 100%)',
			},
			equals: {
				background: 'hsl(176, 100%, 44%)',
				shadow: 'hsl(177, 92%, 70%)',
				text: 'hsl(198, 20%, 13%)',
			},
		},
	},
	history: {
		background: 'hsl(268, 70%, 12%)',
		items: {
			background: 'hsl(268, 70%, 18%)',
		},
	},
}
