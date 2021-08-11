import React from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomBtn = ({bgColor,title,color,borderColor,borderRadius,onPress,width,margin }) => {
    return (
        <View style={[{margin:margin},{width:width}]}>
            <TouchableOpacity
                style={[styles.button,{backgroundColor:bgColor},{color:color},{borderColor:borderColor},{borderRadius:borderRadius}]}
                onPress={onPress}
            >
                {title &&<Text style={[styles.buttonText,{color:color,}]}>{title}</Text>}
            </TouchableOpacity>
        </View>
    )
}

export default CustomBtn
