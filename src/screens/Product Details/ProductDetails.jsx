import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetailsScreen = () => {
  return (
    <View style={styles.contanier}>
      <Text>ProductDetailsScreen</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    contanier: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: "#ffffff"
    }
})