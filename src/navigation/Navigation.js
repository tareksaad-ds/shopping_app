import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import ProductsList from "../screens/Products List/ProductsList";
import ProductDetailsScreen from "../screens/Product Details/ProductDetails";
import CartScreen from "../screens/Cart Screen/CartScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen 
                    name="Products List" 
                    component={ProductsList}
                    options={{
                        headerRight: () => (
                            <>
                                <Pressable onPress={()=>{}} style={{marginRight: 15}}>
                                    <FontAwesome5 name='moon' size={20} color='blue' />
                                </Pressable>
                                <Pressable  style={{marginLeft: 15}}>
                                    <FontAwesome5 name='shopping-cart' size={18} color='black' />
                                </Pressable>
                            </>
                        ),
                    }} 
                />
                <Stack.Screen 
                    name="Products Details" 
                    component={ProductDetailsScreen} 
                />
                <Stack.Screen 
                    name="Cart Screen" 
                    component={CartScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation