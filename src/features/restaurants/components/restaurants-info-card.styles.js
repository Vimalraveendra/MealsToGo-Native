import styled from 'styled-components/native'
import { Card} from 'react-native-paper';

// here  we do styled(Card ) because Card is a component 
// that comes from different library react-native-paper
// not from react-native library.by using parenthesis we 
// can style the external components
export const RestaurantCard =styled(Card)`
background-color:${props=>props.theme.colors.bg.primary};
margin-bottom:${props=>props.theme.space[3]}; 
`;

export const RestaurantCardCover =styled(Card.Cover)`
 padding:${props=>props.theme.space[3]};
 background-color:${props=>props.theme.colors.bg.primary}
`;
// const TitleText =styled(Text)`
//     font-family:${props=>props.theme.fonts.heading}; 
//     font-size:${props=>props.theme.fontSizes.body};
//     color:${props=>props.theme.colors.ui.primary};
// `;

export const Info =styled.View`
  padding:${props=>props.theme.space[3]}; 
`;

export const Address =styled.Text`
   font-family:${props=>props.theme.fonts.body}; 
   font-size:${props=>props.theme.fontSizes.caption};

`
export const Section =styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;

`
export const Rating =styled.View`
    flex-direction:row;
    padding-top:${props=>props.theme.space[2]};
    padding-bottom:${props=>props.theme.space[2]}
`

export const SectionEnd=styled .View`
  flex-direction:row;
`;

export const Icon =styled.View`
padding:0 16px;
`

export const ImageIcon =styled.Image`
width:18px;
height:18px;
`