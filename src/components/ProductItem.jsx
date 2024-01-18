import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <View style={styles.card}>
        <Image source={{uri: product.image}} style={styles.productImage} />
        <Text style={styles.productTitle} numberOfLines={1}>{product.title}</Text>
        <View style={styles.ProductInfo}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.pricetag}>{product.price}</Text>
        </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    card: {
      width: '47%',
      padding:5,
      borderColor: "#cccccc",
      borderWidth: 0.6,
      marginTop:10,
      borderRadius: 5,
      marginHorizontal:5
    },
    productImage: {
      width: '100%',
      borderRadius:5,
      aspectRatio:1 ,
    },
    productTitle:{
      fontWeight: '600',
      fontSize:16,
    },
    ProductInfo: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    pricetag: {
      fontSize: 15,
      fontWeight: '600',
      padding:3
    },
    category: {
      color: 'grey',
      fontWeight: '400',
      padding:3
    }
})