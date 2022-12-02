import styled from 'styled-components';
import 'styled-components/macro';
import ThemeToggle from './ThemeToggle';

const Container = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
	padding: 20px 50px;
`

export const Header = () => {
	return (
		<Container>
			<ThemeToggle></ThemeToggle>
		</Container>
	)
}