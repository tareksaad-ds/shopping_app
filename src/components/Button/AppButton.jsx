import { TouchableOpacity , Text } from "react-native";
import {styles} from './styles'

const AppButton = ({ onPress, title, backgroundColor, color, disabledCondition }) => (
    <TouchableOpacity disabled={disabledCondition} onPress={onPress} style={{...styles.appButtonContainer, backgroundColor}}>
      <Text style={{...styles.appButtonText, color}}>{title}</Text>
    </TouchableOpacity>
);

export default AppButton;

