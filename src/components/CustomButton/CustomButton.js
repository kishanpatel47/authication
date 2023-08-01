import React from 'react'
import { ImageBackground, StyleSheet, Text,  TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { getFont } from '../../utils/getFont'
import getIcons from '../../utils/geticon'

const CustomButton = ({title,image,titleColor,mt ,containerStyle,btnStyle,fontStyle,onPress}) => {
    return (
        <TouchableOpacity style={[containerStyle,{width:'100%',marginTop:mt?mt:scale(30),}]}
        onPress={onPress}>
            <ImageBackground source={getIcons(image)}
            style={[styles.button,btnStyle]}>
                <Text style={[styles.title,fontStyle,{color:titleColor?titleColor:'#fff'}]}>
                    {title.toUpperCase()}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        height:scale(40),
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:scale(20),
        fontFamily:getFont.mandalore,
        letterSpacing:2,
    }
})
