import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		main: {
			background: string
			text: string
		}
		switch: {
			background: string
			toggle: string
		}
		display: {
			background: string
		}
		keyPad: {
			background: string
			keys: {
				normal: {
					background: string
					shadow: string
					text: string
				}
				special: {
					background: string
					shadow: string
					text: string
				}
				equals: {
					background: string
					shadow: string
					text: string
				}
			}
		}
		history: {
			background: string
			items: {
				background: string
			}
		}
	}
}
