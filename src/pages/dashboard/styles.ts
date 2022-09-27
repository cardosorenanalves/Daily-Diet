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
font-weight: 600;

`;
export const InfoText = styled.Text`

`;
export const MealsDiv = styled.View`


`;
export const MealsTitle = styled.Text`
font-size: 16px;
font-weight: ${({theme}) => theme.fonts.regular};

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

margin-bottom: 40px;
`;

export const TitleButton = styled.Text`
font-size: 16px;
color: white;

`;

export const DateTitle = styled.Text`
font-size: 18px;
font-weight: 600;

margin-bottom: 8px;
`;
export const MealsCard = styled.View`
display: flex;
flex-direction: row;

width: 327px;
height: 49px;

border: 1px solid;
border-color: ${({theme}) => theme.colors.gray_5};
border-radius: 6px;
align-items: center;


padding: 0 4%;
`;

export const MealsDate = styled.Text`
font-weight: 700;
font-size: 14px;
margin-right: 12px;
`;

export const Div = styled.View`
width: 1px;
height: 16px;
margin-right: 12px;



background-color: ${({theme}) => theme.colors.gray_5};
`;

export const AlimentName = styled.Text`
width: 217px;
font-weight: 400;
font-size: 16px;
`;
export const ColorStats = styled.View`
width: 16px;
height: 16px;

border-radius: 10;
background-color: ${({theme}) => theme.colors.red_light};
`;
