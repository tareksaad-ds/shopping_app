import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical:10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    cartItemImage: {
        width: '25%',
        aspectRatio: 1,
        padding: 10,
        borderRadius: 10
    },
    itemText: {
        fontSize:17,
        padding: 8,
        color: 'black',
        fontWeight: 'bold',
    }, 
    header: {
        flex:3,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    quantity: {
        flexDirection: 'row',
        paddingHorizontal:10,
        justifyContent:'space-around'
    },
    quantityAmount:{
        fontSize: 16,
        fontWeight: '400'
    },
    amount: {
        flex:2,
        paddingTop: 19
    },
    amountText: {
        fontSize:18,
        letterSpacing: 1.2,
    },
    delete: {
        flex:1,
        justifyContent:"center",
    }
})