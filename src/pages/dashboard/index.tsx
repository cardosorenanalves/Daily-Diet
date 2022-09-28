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

import logoImg from '../../assets/Logo.png'

import { AlimentCard } from '../../components/AlimentCard';

import { SectionList } from 'react-native';

import {useNavigation} from '@react-navigation/native'

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




export function Dashboard(){

  const navigation = useNavigation()

  function handleStatus(){
    navigation.navigate('statistics')
  }

  function handleRegister(){
    navigation.navigate('register')
  }

    return(
        <Conteiner>
            <Header>
                <Logo source={logoImg}/>
                <ProfilePhoto source={{
                    uri: "https://github.com/cardosorenanalves.png"
                }}/>
            </Header>
            <Body>
                <StatusCard
                onPress={handleStatus}
                >
                    <IconArrow/>
                    <Percentage>98,86%</Percentage>
                    <InfoText>das refeições dentro da dieta</InfoText>
                </StatusCard>
                <MealsDiv>
                    <MealsTitle>Refeições</MealsTitle>
                    <MealsButton
                    onPress={handleRegister}
                    >
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