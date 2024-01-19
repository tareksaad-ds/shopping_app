import { TouchableOpacity , Text, StyleSheet } from "react-native";

const AppButton = ({ onPress, title, backgroundColor, color }) => (
    <TouchableOpacity onPress={onPress} style={{...styles.appButtonContainer, backgroundColor}}>
      <Text style={{...styles.appButtonText, color}}>{title}</Text>
    </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        position: 'absolute',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    },
    appButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
  });