import { FlatList, Pressable, View, ActivityIndicator} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productsSlice,{ fetchAllProducts } from '../../redux/productsSlice'
import ProductItem from '../../components/Product Item/ProductItem'
import { styles } from './styles'
import { useTheme } from '@react-navigation/native'

const ProductsList = ({navigation}) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const status = useSelector((state) => state.products.status)
  const { colors } = useTheme();
  const onRefresh = () => {
    dispatch(fetchAllProducts())
}
  useEffect(()=> {
    dispatch(fetchAllProducts())
  },[dispatch])
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      {status === 'success' ? <FlatList 
        data={products}
        keyExtractor={(item) => item.id}
        onRefresh={onRefresh}
        refreshing={status === 'loading'}
        renderItem={({item}) => (
          <Pressable onPress={()=> {
            dispatch(productsSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Details')
          }} style={styles.card}>          
            <ProductItem product={item} navigation={navigation}/>
          </Pressable>  
        )}
        numColumns={2}
      />: <ActivityIndicator size={50} color={'orange'} />}
    </View>
  )
}

export default ProductsList

