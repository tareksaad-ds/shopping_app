import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
    discount: {
      fontSize: 15,
      fontWeight: '600',
      padding:3,
      color: 'red'
    },
    category: {
      color: 'grey',
      fontWeight: '400',
      padding:3
    },
    priceTag: {
      backgroundColor: 'orange',
      fontSize: 15,
      fontWeight: '500',
      position: 'absolute',
      right: 0,
      padding:5
    }
});