import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/productsSlice'
import ProductItem from '../../components/ProductItem'
const ProductsList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  useEffect(()=> {
    dispatch(fetchAllProducts())
  },[dispatch])
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({item}) => (
            <ProductItem product={item}/>
        )}
        numColumns={2}
      />
    </View>
  )
}

export default ProductsList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})