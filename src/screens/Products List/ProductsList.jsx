import { FlatList, Pressable, View, ActivityIndicator, TouchableOpacity, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productsSlice,{ fetchAllProducts } from '../../redux/productsSlice'
import ProductItem from '../../components/Product Item/ProductItem'
import { styles } from './styles'
import { useTheme } from '@react-navigation/native'

const LIMIT = 10;
const ProductsList = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const { colors } = useTheme();
  const [skip, setSkip] = useState(0);
  const onRefresh = () => {
    dispatch(fetchAllProducts());
}
  useEffect(()=> {
    dispatch(fetchAllProducts());
  },[dispatch])
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      {products && products.length !== 0 ? <FlatList 
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          dispatch(fetchAllProducts(skip + LIMIT));
          setSkip(skip + LIMIT);
        }}
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
      />: status === 'failed' ? (
        <View style={styles.container}>
          <Text style={{...styles.headline, color: colors.text}}>Something Went Wrong</Text>
          <TouchableOpacity style={{...styles.retryBtn, backgroundColor: colors.text}} onPress={onRefresh}>
            <Text style={{...styles.retryBtnText,color :colors.background}}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) :<ActivityIndicator size={50} color={'orange'} />}
    </View>
  )
}

export default ProductsList

