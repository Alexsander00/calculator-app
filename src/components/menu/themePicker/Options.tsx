import styled from 'styled-components'

const Container = styled.div`
	display: inline-flex;
	justify-content: space-around;

	p {
		color: ${({ theme }) => theme.main.text};
	}
`

const Options = () => (
	<Container>
		<p>1</p>
		<p>2</p>
		<p>3</p>
	</Container>
)

export default Options
