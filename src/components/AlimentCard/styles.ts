import styled from "styled-components/native";

export const MealsCard = styled.TouchableOpacity`
display: flex;
flex-direction: row;

width: 327px;
height: 49px;

border: 1px solid;
border-color: ${({theme}) => theme.colors.gray_5};
border-radius: 6px;
align-items: center;


margin-bottom: 3%;
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