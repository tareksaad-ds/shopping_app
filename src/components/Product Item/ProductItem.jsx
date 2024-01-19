import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'

const ProductItem = ({product}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.card}>  
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        <Text style={{...styles.productTitle, color:colors.text}} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.priceTag}>${product.price}</Text>
        <View style={styles.ProductInfo}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.discount}><FontAwesome5 name='tag' /> {product.discountPercentage}%</Text>
        </View>
    </View>
  )
}

export default ProductItem

