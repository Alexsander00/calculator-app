import styled from 'styled-components'

interface IDisplay {
	value: string
}

const Container = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.display.background};
	border-radius: 15px;
	color: ${({ theme }) => theme.main.text};
	display: flex;
	font-size: 2.25rem;
	justify-content: flex-end;
	padding: 0.45em;
	word-break: break-all;
`

const Display = ({ value }: IDisplay) => (
	<Container>
		<p>{value}</p>
	</Container>
)

export default Display
