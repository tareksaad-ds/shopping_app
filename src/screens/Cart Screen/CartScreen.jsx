import { FlatList, Text, View , Alert} from 'react-native'
import React from 'react'
import CartItem from '../../components/Cart Item/CartItem';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../../components/Button/AppButton';
import { cartSlice, syncCart } from '../../redux/cartSlice';
import { useTheme } from '@react-navigation/native';



const CartScreen = ({navigation}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { colors } = useTheme()
  const showAlert = () =>
  Alert.alert(
    'Place Order',
    'Your cart items have been ordered successfully',
    [
      {
        text: 'Done',
        onPress: () => navigation.navigate('Products List') ,
        style: 'default',
      },
    ],
    {
      onDismiss: () => navigation.navigate('Products List') 
    },
  );
  const placeOrder = () => {
    dispatch(cartSlice.actions.clear())
    dispatch(syncCart([]))
    showAlert();
  }
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <FlatList
        style={styles.list}
        data={cartItems}
        keyExtractor={(item) => item.product.id}
        renderItem={({item}) => (
          <CartItem  cartItem={item}/>
        )}
        ListFooterComponent={CartTotalsComponent}
      />
      <AppButton disabledCondition={cartItems.length === 0} backgroundColor={colors.text} color={colors.background} onPress={placeOrder} title={'Place Order'} />
    </View>
  )
}

const CartTotalsComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((total, item) => total + (item.quantity * item.product.price) ,0)
  const { colors } = useTheme()
  
  return (
    <View style={styles.row}>
      <Text style={{...styles.totalText, color:colors.text}}>Total</Text>
      <Text style={{...styles.totalSum, color: colors.text}}>${total}</Text>
    </View>
  )
  }
export default CartScreen

