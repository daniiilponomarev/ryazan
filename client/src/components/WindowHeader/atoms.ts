import styled from 'styled-components/native';
import {Header} from '../Header';
import {theme} from '../../consts';

export const Container = styled(Header).attrs({
    statusBarStyle: 'light-content',
})`
    background-color: ${theme.windowHeaderColor};
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-right: 60;
`;

export const Title = styled.Text`
    font-family: Roboto;
    font-size: 14;
    font-weight: 500;
    text-transform: uppercase;
    color: white;
`;
