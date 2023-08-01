import React from 'react'
import { StyleSheet,  TextInput, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { getFont } from '../../utils/getFont'

const CustomInput = ({placeholder,onChangeText,value}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor='gray'
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer:{
        width:'100%',
        height:scale(40),
        marginBottom:scale(15)
    },
    input:{
        width:'100%',
        height:scale(40),
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:scale(5),
        fontSize:scale(18),
        padding:scale(10),
        fontFamily:getFont.arial
    }
})
