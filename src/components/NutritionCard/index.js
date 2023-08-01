import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../../utils/colors'
import { commonStyles } from '../../utils/commonStyles'
import { getFont } from '../../utils/getFont'
import getIcons from '../../utils/geticon'

const NutritionCard = ({name,subTxt}) => {
    return (
        <View style={[commonStyles.shadowBox2,{borderRadius:scale(10),marginBottom:scale(20)}]}>
            <View style={styles.innerBox}>
                <Image
                    source={getIcons('exercise')}
                    resizeMode='contain'
                    style={styles.img2}
                />
                <View style={styles.sideView}>
                    <Text 
                    style={styles.title}>
                        {name}
                    </Text>
                    <Text 
                    style={styles.subTxt}>
                        {subTxt}
                    </Text>

                </View>
            </View>
    </View>
    )
}

export default NutritionCard

const styles = StyleSheet.create({
    innerBox:{
        height:scale(130),
        flexDirection:'row',
    },
    img2:{
        height:'100%',
        width:'40%',
        borderRadius:scale(10),
    },
    title:{
        fontSize:scale(26),
        letterSpacing:scale(1.5),
        fontFamily:getFont.mandalore,
        color:colors.white,
    },
    sideView:{
        width:'60%',
        backgroundColor:colors.darkerGray,
        borderRadius:scale(10),
        padding:scale(10),
        justifyContent:'center'
    },
    subTxt:{
        fontSize:scale(14),
        color:colors.textGray,
        fontFamily:getFont.arial,
        marginTop:scale(10)
    }
})
