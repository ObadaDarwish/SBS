import {Box} from '@mui/material';
import styled from 'styled-components';

export const MainLayoutBox = styled(Box)`
	background: ${({theme}) => theme.palette.background.default};
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
