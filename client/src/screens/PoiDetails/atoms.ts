import Markdown from 'react-native-easy-markdown';
import styled from 'styled-components/native';
import {theme} from '../../consts';

export const Container = styled.View`
    flex: 1;
`;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const Content = styled.View`
    padding: ${theme.screenIndent};
`;

export const Title = styled.Text`
    font-size: 24;
`;

export const Subtitle = styled.Text`
    margin-top: 10;
    font-size: 14;
    color: #999;
`;

export const Description = styled(Markdown)`
    margin-top: ${theme.screenIndent};
`;
