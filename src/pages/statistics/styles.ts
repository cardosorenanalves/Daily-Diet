import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native"

export const Conteiner = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.green_light};
`;

export const Header = styled.View`
display: flex;
width: 100%;
height: 200px;

background-color: ${({theme}) => theme.colors.green_light};

align-items: center;
justify-content: center;
`;

export const Percentage = styled.Text`
font-weight: 700;
font-size: 32px;
`;

export const Body = styled.View`
display: flex;
height: 100%;
background-color: ${({theme}) => theme.colors.white};
border-radius: 20px;

align-items: center;
`;

export const Title = styled.Text`
font-weight: 700;
font-size: 16px;

margin-top: 33px;
margin-bottom: 23px;
`;

export const CardLarge = styled.View`
display: flex;
width: 327px;
height: 89px;

align-items: center;
justify-content: center;

background-color:  #EFF0F0;
border-radius: 8px;

margin-bottom: 12px;
`;

export const Number = styled.Text`
font-weight: 700;
font-size: 24px;
`;

export const Info = styled.Text`
font-weight: 400;
font-size: 14px;
`;

export const SmallDiv = styled.View`
width: 327px;
display: flex;
flex-direction: row;

justify-content: space-between;
`;

export const CardSmall = styled.View`
display: flex;
flex-direction: column;

width: 157.5px;
height: 107px;

background-color: #E5F0DB;

align-items: center;
justify-content: center;


border-radius: 8px;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
font-size: 32px;
color: #639339;
`

export const BackButton = styled.TouchableOpacity`
margin-right: 80%;
`;