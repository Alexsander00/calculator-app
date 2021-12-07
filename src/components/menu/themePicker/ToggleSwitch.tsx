import { useLayoutEffect, useState } from 'react'

import styled from 'styled-components'

import useTheme from 'hooks/useTheme'

enum Position {
	start = 'flex-start',
	center = 'center',
	end = 'flex-end',
}

const Container = styled.div<{ position: Position }>`
	align-items: center;
	background-color: ${({ theme }) => theme.switch.background};
	border-radius: 50px;
	display: flex;
	grid-column: 2 / 3;
	justify-content: ${props => props.position};
`

const Toggle = styled.button`
	background-color: ${({ theme }) => theme.switch.toggle};
	border-radius: 100px;
	cursor: pointer;
	height: 1em;
	margin: 0.5em;
	width: 1em;
`

const ToggleSwitch = () => {
	const [position, setPosition] = useState(Position.start)
	const { changeToTheme1, changeToTheme2, changeToTheme3 } = useTheme()

	const changeTheme = {
		'flex-start': {
			onClickHandler() {
				setPosition(Position.center)
			},
			effect: changeToTheme1,
		},
		center: {
			onClickHandler() {
				setPosition(Position.end)
			},
			effect: changeToTheme2,
		},
		'flex-end': {
			onClickHandler() {
				setPosition(Position.start)
			},
			effect: changeToTheme3,
		},
	}

	useLayoutEffect(changeTheme[position].effect, [position])

	return (
		<Container position={position}>
			<Toggle role='switch' onClick={changeTheme[position].onClickHandler} />
		</Container>
	)
}

export default ToggleSwitch
