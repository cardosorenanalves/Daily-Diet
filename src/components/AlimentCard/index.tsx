import { AlimentName, ColorStats, Div, MealsCard, MealsDate } from "./styles";

interface CardProps{
    title: string;
}

export function AlimentCard({title}: CardProps){
    return(
    <MealsCard>
        <MealsDate>20:00</MealsDate>
        <Div/>
        <AlimentName>{title}</AlimentName>
        <ColorStats/>
    </MealsCard>
    )
}