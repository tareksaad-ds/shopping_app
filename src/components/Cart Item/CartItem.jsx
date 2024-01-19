import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {Feather} from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice, syncCart } from '../../redux/cartSlice'
import { useTheme } from '@react-navigation/native'

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)
  const {colors} = useTheme()
  const incrementQuantity = ()=>{
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: 1
    }))
    dispatch(syncCart(cartItems));
  }
  const decrementQuantity = ()=>{
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: -1
    }))
    dispatch(syncCart(cartItems));
  }
  const removeCartItem = ()=> {
    dispatch(cartSlice.actions.deleteItem(cartItem.product.id));
    dispatch(syncCart(cartItems));
  }
  return (
      <View style={{...styles.container, backgroundColor: colors.background}}>
        <Image source={{uri: cartItem.product.thumbnail}} style={styles.cartItemImage} />
        <View style={styles.header}>
          <Text style={{...styles.itemText, color: colors.text}}>{cartItem.product.title}</Text>
          <View style={styles.quantity}>
            <Feather 
              onPress={decrementQuantity}
              name='minus-circle'
              color= {colors.border}
              size={20}
            />
            <Text style={{...styles.quantityAmount, color: colors.text}}>{cartItem.quantity}</Text>
            <Feather 
              onPress={incrementQuantity}
              name='plus-circle'
              color={colors.border}
              size={20}
            />
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={{...styles.amountText, color: colors.text}}>${cartItem.product.price * cartItem.quantity}</Text>
        </View>
        <View style={styles.delete}>
        <Feather 
          onPress={removeCartItem}
          name='x-circle'
          color='red'
          size={30}
        />
        </View>
      </View>
 )
}

export default CartItem