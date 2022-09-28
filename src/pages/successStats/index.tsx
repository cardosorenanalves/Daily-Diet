import Ilustration from '../../assets/Illustration.png'
import {useNavigation} from '@react-navigation/native'
import {
    Conteiner,
    Title,
    Subtitle,
    ImageIlustration,
    ButtonReturn,
    Strong,
    ButtonContent
} from './styles'

export function SuccessStats(){

    const navigation = useNavigation()

    function handleReturn(){
        navigation.navigate('dashboard')
    }
    return(
        <Conteiner>
            <Title>Continue assim!</Title>
            <Subtitle>Você continua <Strong> dentro da dieta </Strong>. Muito bem!</Subtitle>
            <ImageIlustration
            source={Ilustration}
            />
            <ButtonReturn>
                <ButtonContent
                onPress={handleReturn}
                >Ir para a página inicial</ButtonContent>
            </ButtonReturn>
        </Conteiner>
    )
}