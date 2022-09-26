import React from 'react';
import { 
    Conteiner,
    Header,
    Logo,
    ProfilePhoto,
    Body,
    StatusCard,
    IconArrow,
    Percentage,
    InfoText,
    MealsDiv,
    MealsTitle,
    MealsButton

} from './styles';

import logoImg from '../../../assets/Logo.png'

export function Dashboard(){
    return(
        <Conteiner>
            <Header>
                <Logo source={logoImg}/>
                <ProfilePhoto source={{
                    uri: "https://github.com/cardosorenanalves.png"
                }}/>
            </Header>
            <Body>
                <StatusCard>
                    <IconArrow/>
                    <Percentage>98,86%</Percentage>
                    <InfoText>das refeições dentro da dieta</InfoText>
                </StatusCard>
                <MealsDiv>
                    <MealsTitle></MealsTitle>
                    <MealsButton />
                </MealsDiv>
            </Body>
        </Conteiner>
    )
}