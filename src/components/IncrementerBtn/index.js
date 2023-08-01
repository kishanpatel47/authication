import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../../utils/colors'
import { commonStyles } from '../../utils/commonStyles'
import { getFont } from '../../utils/getFont'
import getIcons from '../../utils/geticon'

const InrementerBtn = ({title,data}) => {
    return (
        <View style={styles.main}>
        <Text style={commonStyles.title}>{title}</Text>
        <View style={styles.fd}>
            <Text style={styles.btnTxt}>{data}</Text>
            <View>
                <Image source={getIcons('arrowUp')} 
                style={styles.upIcon}resizeMode='contain'/>
                <Image 
                source={getIcons('arrowDown')}style={styles.upIcon}
                resizeMode='contain'/>
            </View>
        </View>
    </View>
    )
}

export default InrementerBtn

const styles = StyleSheet.create({
    fd:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:colors.darkGray,
        height:scale(30),
        width:scale(100),
        padding:scale(5)
    },
    upIcon:{
        height:scale(10),
        width:scale(10),
    },
    main:{
        height:scale(60),
        width:scale(100),
    },
    btnTxt:{
        fontSize:scale(18),
        color:colors.white,
        textAlign:'center',
        fontFamily:getFont.mandalore
    },
    title:{
        fontSize:scale(18),
        fontFamily:getFont.mandalore,
        color:colors.white,
        textAlign:"center",
        marginBottom:scale(5),
        // marginTop:30,
    }
})
