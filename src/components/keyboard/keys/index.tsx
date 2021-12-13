import styled from 'styled-components'

const Key = styled.button`
	background-color: ${({ theme }) => theme.keyPad.keys.normal.background};
	border-bottom: 5px solid ${({ theme }) => theme.keyPad.keys.normal.shadow};
	border-radius: 10px;
	color: ${({ theme }) => theme.keyPad.keys.normal.text};
	cursor: pointer;
	font-size: 1.25rem;

	&:hover {
		background-color: ${({ theme }) => theme.keyPad.keys.normal.shadow};
	}
`
export default Key
