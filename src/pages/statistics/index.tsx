import {
    Conteiner,
    Header,
    Percentage,
    Body,
    Title,
    CardLarge,
    Number,
    Info,
    SmallDiv,
    CardSmall,
} from './styles'

export function Statistics(){
    return(
        <Conteiner>
            <Header>
                <Percentage>90,86%</Percentage>
                <Info>das refeições dentro da dieta</Info>
            </Header>
            <Body>
                <Title>Estatísticas gerais</Title>
                <CardLarge>
                    <Number>22</Number>
                    <Info>melhor sequência de pratos dentro da dieta</Info>
                </CardLarge>
                <CardLarge>
                    <Number>109</Number>
                    <Info>refeições registradas</Info>
                </CardLarge>
                <SmallDiv>
                    <CardSmall>
                        <Number>99</Number>
                        <Info>refeições dentro da dieta</Info>
                    </CardSmall>
                     <CardSmall>
                        <Number>10</Number>
                        <Info>refeições dentro da dieta</Info>
                    </CardSmall>
                </SmallDiv>
            </Body>
        </Conteiner>
    )
}