import styled from "styled-components/native";

export const Conteiner = styled.View`
flex: 1;
`;

export const Header = styled.View`
display: flex;
flex-direction: row;

width: 100%;
height: 10%;

justify-content: space-between;
margin-top: 12%;
padding: 0 6%;

`;

export const Logo = styled.Image`
width: 82px;
height: 37px;
`;
export const ProfilePhoto = styled.Image`
width: 40px;
height: 40px;
border: 1px solid gray;

border-radius: 50;
`;

export const Body = styled.View`
display: flex;
flex-direction: column;

align-items: center;
`;
export const StatusCard = styled.View`
display: flex;
flex-direction: column;

width: 327px;
height: 102px;

background-color: ${({theme}) => theme.colors.green_light};
align-items: center;
justify-content: center;

border-radius: 8;
margin-bottom: 40px;
`;
export const IconArrow = styled.View``;

export const Percentage = styled.Text`
font-size: 32px;
font-weight: ${({theme}) => theme.fonts.bold};

`;
export const InfoText = styled.Text`

`;
export const MealsDiv = styled.View`


`;
export const MealsTitle = styled.Text`
font-size: 16px;

margin-bottom: 8px;
`;
export const MealsButton = styled.TouchableOpacity`
display: flex;
width: 327px;
height: 50px;
background-color: ${({theme}) => theme.colors.gray_1};

border-radius: 6;
align-items: center;
justify-content: center;

`;

export const TitleButton = styled.Text`
font-size: 16px;
color: white;

`;
