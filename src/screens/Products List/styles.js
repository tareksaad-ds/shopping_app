import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    card: {
        width: '47%',
        padding:5,
        borderColor: "#cccccc",
        borderWidth: 0.6,
        marginTop:10,
        borderRadius: 5,
        marginHorizontal:5
    },
    headline: {
        fontSize: 20,
        fontWeight: '500',
    },
    retryBtn: {
        padding: 10,
        marginTop: 30,
        width: '25%',
        borderRadius: 100,
    },
    retryBtnText: {
        textAlign: 'center',
    }
})