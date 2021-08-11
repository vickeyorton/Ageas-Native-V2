import React,{useState} from 'react'
import { View,Text, TextInput } from 'react-native';
import color from '../../../assets/theme/color';
import styles from './styles';

const Input = ({onChangeText,value,style,placeholder,label, icon, iconPosition,secureTextEntry,labelFontSize,keyboardType,...props}) => {
    const [focused,setFocused] = useState(false);
    const getFlexDirection =() =>{
        if(icon && iconPosition){
            if(iconPosition === "right"){
                return "row-reverse";
            }else if(iconPosition === "left"){
                return "row";
            }
        }else{
            return "row";
        }
    }

    const getFocused =() =>{
        if(focused){
            return color.purple
        }else{
            return "#2d2d2d"
        }
    }
    
    const getErrorBorder = () =>{
        if(error){
            return color.danger
        }
    }

    return (
        <View style={{paddingVertical:10}}>
            {label && <Text style={[styles.inputLabel,{fontSize:labelFontSize}]}>{label}</Text>}
            <View 
            onFocus={()=>{setFocused(true)}}
            onBlur={()=>{setFocused(false)}}
            style={[styles.wrapper,{flexDirection:getFlexDirection()},{borderColor:getFocused()}]}>
                {icon && <View style={styles.iconContainer}>{ icon}</View>} 
                <TextInput 
                    style={[styles.textInput,{color:getFocused()}]}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType = {keyboardType}
                />
            </View>
        </View>
    )
}

export default Input;
