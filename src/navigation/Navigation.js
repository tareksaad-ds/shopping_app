import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../redux/cartSlice";
import { themeSlice } from "../redux/themeSlice";
import { DefaultTheme } from "../utils/themes/DefaultTheme";
import { DarkTheme } from "../utils/themes/DarkTheme";
import ProductsList from "../screens/Products List/ProductsList";
import ProductDetailsScreen from "../screens/Product Details/ProductDetails";
import CartScreen from "../screens/Cart Screen/CartScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
    const numberOfItems = useSelector((state) => state.cart?.items?.length);
    const theme = useSelector((state) => state.theme?.theme)
    const dispatch = useDispatch();
    const { colors } = useTheme();
    const toggleTheme = () => {
        dispatch(themeSlice.actions.changeTheme())
    }
    useEffect(()=>{
        dispatch(loadCart());
    },[])
    return (
        <NavigationContainer theme={theme === 'light'? DefaultTheme : DarkTheme}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Products List" 
                    component={ProductsList}
                    options= {({navigation}) =>({
                        headerRight: () => (
                            <>
                                <Pressable onPress={toggleTheme} style={{marginRight: 15}}>
                                    <FontAwesome5 name={theme === 'light' ? 'moon' : 'sun'} size={20} color={theme === 'light'? 'blue' : 'orange'} />
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate('Cart Screen')}  style={{marginLeft: 15, flexDirection:"row"}}>
                                    <FontAwesome5 name='shopping-cart' size={18} color={colors.notification} />
                                    <Text style={{color: colors.notification, padding:2}}>({numberOfItems})</Text>
                                </Pressable>
                            </>
                        ),
                    })}
                />
                <Stack.Screen 
                    name="Product Details" 
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