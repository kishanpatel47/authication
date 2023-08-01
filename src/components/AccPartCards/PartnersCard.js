import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import getIcon from "../../utils/geticon";
import {colors} from "../../utils/colors";
import {getFont} from "../../utils/getFont";
import { commonStyles } from '../../utils/commonStyles';
import { scale } from 'react-native-size-matters';



const PartnersCard = () => {
    return (
        <View 
        style={[commonStyles.shadowBox,{marginBottom:scale(15),borderRadius:scale(5)}]}>
            <View style={styles.mainView}>
                <Image source={getIcon('userAvatar')}
                style={styles.avatarStyle} />
                <View style={styles.details}>
                <View style={styles.nameView}>
                        <Text style={styles.name}>
                            JOHN DOE
                        </Text>
                    <View style={styles.circle}/>
                </View>
                    <View style={styles.progressBarOuter}>
                        <View style={styles.progressBarInner}>
                            <Text style={styles.commonTxt}>ACTIVITY RATING</Text>
                            <Text style={styles.commonTxt}>80%</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.bottomTxt}>last response</Text>
                        <Text style={[styles.bottomTxt,{color:colors.btnColor,left:10}]}>a day ago</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PartnersCard

const styles = StyleSheet.create({
    mainView:{
        padding:scale(15),
        paddingHorizontal:scale(10),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
        borderColor:colors.borderBlue,
        borderRadius:scale(5),
        borderWidth:scale(0.5),
        height:scale(90),       
        },
        avatarStyle:{
            height:scale(50),
            width:scale(50),
            borderRadius:scale(30)
        },
        details:{
            flex:1,
            left:scale(20)
        },
        progressBarOuter:{
            height:scale(20),
            width:'90%',
            backgroundColor:colors.darkGray,
            borderRadius:scale(5),
            justifyContent:'center',
            padding:scale(2)
        },
        progressBarInner:{
            height:scale(15),
            width:'80%',
            backgroundColor:colors.orange,
            borderRadius:scale(3),
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:scale(5)
        },
        nameView:{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:scale(5)
        },
        circle:{
            backgroundColor:colors.lightOrange,
            height:scale(10),
            width:scale(10),
            borderRadius:scale(15),
            marginLeft:scale(10)
        },
        name:{
            color:colors.white,
            fontFamily:getFont.mandalore,
            fontSize:scale(18),
            letterSpacing:scale(1),
        },
        commonTxt:{
            fontFamily:getFont.mandalore,
            fontSize:scale(14),
            letterSpacing:scale(1),
            color:colors.white
        },
        bottom:{
            flexDirection:'row',
            alignItems:'center',
            marginTop:scale(5)
        },
        bottomTxt:{
            fontFamily:getFont.arial,
            fontSize:scale(14),
            letterSpacing:scale(1),
            color:colors.white,
            fontWeight:'700'
        }
})
