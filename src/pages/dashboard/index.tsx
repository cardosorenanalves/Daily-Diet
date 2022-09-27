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
    DateTitle
 

} from './styles';

const DATA = [
    {
      title: "12.08.22",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "11.08.22",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "10.08.22",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "09.08.22",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];


import logoImg from '../../../assets/Logo.png'

import { AlimentCard } from '../../components/AlimentCard';

import { SectionList } from 'react-native';

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
                </MealsDiv>
                   
                <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <AlimentCard title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                <DateTitle>{title}</DateTitle>
                )}
                showsVerticalScrollIndicator={false}
                />
            </Body>
          
        </Conteiner>
    )
}