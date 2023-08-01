import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import getIcons from '../../utils/geticon'

const CustomHeader = ({title}) => {
    return (
        <View style={styles.header}>
            <ImageBackground source={getIcons('headerBg')} style={styles.img}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </ImageBackground>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    header:{
        height:60,
        width:'100%',
    },
    img:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontFamily:'mandalore',
        letterSpacing:2
    }
})
