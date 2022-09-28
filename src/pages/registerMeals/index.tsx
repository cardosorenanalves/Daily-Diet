import {useNavigation} from '@react-navigation/native'

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
    const navigation = useNavigation()
    
    function handleReturn(){
        navigation.navigate('dashboard')
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
                    <InputName/>
                </RegisterView>
                <RegisterView>
                    <Info>Descrição</Info>
                    <InputDescription/>
                </RegisterView>
                <DateView>
                    <ContentView>
                        <Info>Data</Info>
                        <DateInput/>
                    </ContentView>
                    <ContentView>
                        <Info>Hora</Info>
                        <DateInput/>
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

                <RegisterButton>
                    <Content>Cadastrar refeição</Content>
                </RegisterButton>
            </Body>
        </Conteiner>
    );
}