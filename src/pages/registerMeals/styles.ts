import { ArrowLeft } from "phosphor-react-native";
import { TextInput } from "react-native";
import styled from "styled-components/native"

export const Conteiner = styled.View`
flex: 1;
background-color: #DDDEDF;
`;

export const Header = styled.View`
height: 110px;

display: flex;
flex-direction: row;

align-items: center;
justify-content: space-between;
`;

export const Icon = styled(ArrowLeft)`
`;

export const BackButton = styled.TouchableOpacity`
margin-top: 25px;
margin-left: 5%;

`

export const Title = styled.Text`
font-weight: 600;
font-size: 18px;

margin-top: 25px;
margin-right: 35%;
`;

export const Body = styled.View`
width: 100%;
height: 100%;

background-color: white;

border-radius: 20px;

padding: 0px 24px;
padding-top: 40px;
`;

export const RegisterView = styled.View`
margin-bottom: 24px;
`;

export const Info = styled.Text`
font-weight: 700;
font-size: 14px;
`;

export const InputName = styled(TextInput)`
width: 100%;
height: 48px;

border: 1px solid;
border-color: #DDDEDF;
border-radius: 6px;

margin-top: 4px;
`;

export const InputDescription = styled(TextInput)`
width: 100%;
height: 120px;

border: 1px solid;
border-color: #DDDEDF;
border-radius: 6px;

margin-top: 4px;
`;

export const DateView = styled.View`
display: flex;
flex-direction: row;

justify-content: space-between;
align-items: center;

margin-bottom: 24px;
`;

export const ContentView = styled.View`
`;

export const DateInput = styled(TextInput)`
width: 153.5px;
height: 48px;

border: 1px solid;
border-color: #DDDEDF;
border-radius: 6px;

margin-top: 4px;
`;

export const ButtonInfo = styled.TouchableOpacity`
display: flex;
flex-direction: row;

width: 159.5px;
height: 50px;

background-color:  #EBEBEB;

border-radius: 6px;

margin-top: 6px;

justify-content: center;
align-items: center;
`;

export const IconCircle = styled.View`
width: 8px;
height: 8px;

background: #639339;
margin-right: 8px;

border-radius: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
display: flex;

height: 50px;

background: #333638;
border-radius: 6px;

justify-content: center;
align-items: center;

margin-top: 80px;
`;

export const Content = styled.Text`
font-weight: 600;
font-size: 16px;

color: #FFFFFF;

`;