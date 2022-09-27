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
    MealsButton,
    TitleButton,
    DateTitle,
    MealsCard,
    MealsDate,
    Div,
    AlimentName,
    ColorStats,

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
                    <MealsTitle>Refeições</MealsTitle>
                    <MealsButton >
                     <TitleButton>
                        + Nova refeição
                    </TitleButton>   
                    </MealsButton >
                    <DateTitle>
                    12.08.22
                    </DateTitle>
                    <MealsCard>
                        <MealsDate>20:00</MealsDate>
                        <Div/>
                        <AlimentName>X-Tudo</AlimentName>
                        <ColorStats/>
                    </MealsCard>
                </MealsDiv>
            </Body>
        </Conteiner>
    )
}