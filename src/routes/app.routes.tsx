import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Dashboard } from '../pages/dashboard';
import { RegisterMeals } from '../pages/registerMeals';
import { Statistics } from '../pages/statistics';

const {Navigator ,Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
            name='dashboard'
            component={Dashboard}
            />

            <Screen
            name='statistics'
            component={Statistics}
            />

            <Screen
            name='register'
            component={RegisterMeals}
            />
        </Navigator>
    )
}