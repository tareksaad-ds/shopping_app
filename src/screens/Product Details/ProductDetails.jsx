import React from 'react'
import { FlatList, Image, ScrollView, Text, View, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice, syncCart } from '../../redux/cartSlice'
import { useTheme } from '@react-navigation/native'
import AppButton from '../../components/Button/AppButton'
import { styles } from './styles'

const ProductDetailsScreen = ({navigation}) => {
  const selectedProduct = useSelector((state) => state.products?.selectedProduct)
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const addToCart = async() => {
     dispatch(cartSlice.actions.addCartItem(selectedProduct));
     dispatch(syncCart(cartItems));
     navigation.navigate('Products List')
  };
  return (
    <View style={{...styles.contanier, backgroundColor: colors.background}}>
      <ScrollView>
        <FlatList
          data={selectedProduct.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={{...styles.title, color: colors.text}}>{selectedProduct.title}</Text>
          <Text style={{...styles.price, color: colors.text}}>${selectedProduct.price}</Text>
          <Text style={{...styles.description, color: colors.text}}>{selectedProduct.description}</Text>
        </View>
      </ScrollView>
      <AppButton backgroundColor={colors.text} color={colors.background} onPress={addToCart} title={'Add To Cart'} />
    </View>
  )
}
export default ProductDetailsScreen

