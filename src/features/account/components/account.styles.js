import {Button,TextInput} from 'react-native-paper';
import styled from 'styled-components';
import {colors} from '../../../infrastructure/theme/colors'
import { Text } from "../../../components/typography/text.component";

export const AccountBackgroundImage =styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg")
})`
flex: 1;
justify-content:center;
align-items:center;
`;

export const AccountTitle =styled(Text)`
 font-size:30px;
`
export const AccountCover =styled.View`
 position:absolute;
 width:100%;
 height:100%;
 background-color:rgba(255,255,255,0.3);
`;

export const AccountContainer =styled.View`
background-color:rgba(255,255,255,0.7);
padding:${props=>props.theme.space[4]};
margin-top:${props=>props.theme.space[2]};
`;

export const AuthButton =styled(Button).attrs({
// the reason why we have import the colors here because the
 // theme is not available when you set the attributes here.
    color:colors.brand.primary,
})`
padding:${props=>props.theme.space[2]}
`;

export const AuthInput =styled(TextInput)`
width:300px;
`;


export const ErrorContainer =styled.View`
max-width:300px;
align-items:center;
margin-top:${props=>props.theme.space[2]};
margin-bottom:${props=>props.theme.space[2]};
`