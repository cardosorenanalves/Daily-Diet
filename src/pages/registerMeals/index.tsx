import {useNavigation} from '@react-navigation/native'
import { useState } from 'react'

import {
    Conteiner,
    Header,
    Icon,
    BackButton,
    Title,
    Body,
    RegisterView,
    Info,
    InputName,
    InputDescription,
    DateView,
    ContentView,
    DateInput,
    ButtonInfo,
    IconCircle,
    RegisterButton,
    Content,
} from './styles'



export function RegisterMeals(){
    const [inputHeight, setInputHeight] = useState(0)
    const navigation = useNavigation()
    
    function handleReturn(){
        navigation.navigate('dashboard')
    }

    function handleRegister(){
        navigation.navigate('stats')
    }
    return(
        <Conteiner>
            <Header>
                <BackButton
                onPress={handleReturn}
                >
                    <Icon/>
                </BackButton>
                <Title>Nova refeição</Title>
            </Header>
            <Body>
                <RegisterView>
                    <Info>Nome</Info>
                    <InputName
                    maxLength={60}
                    selectionColor='#000000'
                    />
                </RegisterView>
                <RegisterView>
                    <Info>Descrição</Info>
                    <InputDescription
                    style={{height: inputHeight}}
                    multiline={true}
                    onContentSizeChange={(e)=> setInputHeight(e.nativeEvent.contentSize.height + 12)}
                    maxLength={305}
                    selectionColor='#000000'
                    />
                </RegisterView>
                <DateView>
                    <ContentView>
                        <Info>Data</Info>
                        <DateInput 
                        dataDetectorTypes={'calendarEvent'}
                        selectionColor='#000000'
                        keyboardType={'number-pad'}
                        />
                    </ContentView>
                    <ContentView>
                        <Info>Hora</Info>
                        <DateInput
                        selectionColor='#000000'
                        />
                    </ContentView>
                </DateView>
                <Info>Está dentro da dieta?</Info>
                <DateView> 
                    <ButtonInfo>
                        <IconCircle/>
                        <Info>Sim</Info>
                    </ButtonInfo>
                    <ButtonInfo>
                        <IconCircle/>
                        <Info>Não</Info>
                    </ButtonInfo>
                </DateView>

                <RegisterButton onPress={handleRegister}>
                    <Content>Cadastrar refeição</Content>
                </RegisterButton>
            </Body>
        </Conteiner>
    );
}