import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../../utils/colors'
import { commonStyles } from '../../utils/commonStyles'
import { getFont } from '../../utils/getFont'
import getIcons from '../../utils/geticon'
import CustomButton from '../CustomButton/CustomButton'

const ProgramsCard = ({name,currentState,ind,onPress}) => {
    return (
        <TouchableOpacity style={[currentState=='ACTIVE'? commonStyles.shadowBox:commonStyles.shadowBox2,{borderRadius:scale(10),marginBottom:scale(20)}]}
        onPress={onPress}>
            <View style={[styles.innerBox,{ 
            backgroundColor: currentState==='ACTIVE'? colors.black:colors.darkGray}]}>
                <ImageBackground source={getIcons(currentState=='ACTIVE'?'program1':'program2')}
                resizeMode='cover'
                style={[styles.img1,]}
                >
                <Text 
                style={[styles.number,{color:currentState=='ACTIVE'?colors.white:colors.black}]}>
                    {ind+1}
                </Text>
                <Image
                source={getIcons('exercise')}
                resizeMode='cover'
                style={styles.img2}
                />
            </ImageBackground>
            <View style={styles.sideView}>
                <Text
                style={styles.title}
                >
                    {name}  
                </Text>
                {currentState=='ACTIVE'?
                <View style={styles.fd}>
                    <Image
                    style={{height:scale(20),width:scale(20),}}
                    resizeMode='contain'
                    source={getIcons('')}
                    />
                    <Text 
                    style={styles.txt}>
                        CURRENT PROGRAM
                    </Text>
                </View>
                :
                <View>
                    <CustomButton
                        containerStyle={{height:scale(30)}}
                        btnStyle={{height:scale(25)}}
                        fontStyle={{fontSize:scale(12)}}
                        image={'button'}
                        title={'SELECT PROGRAM'}
                    />
                </View>
            }
        </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProgramsCard

const styles = StyleSheet.create({
    innerBox:{
        height:scale(130),
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        borderRadius:scale(10)
    },
    img1:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        height:scale(130),
        width:'50%',
        borderRadius:scale(10),
        overflow:'hidden'
    },
    img2:{
        height:'100%',
        width:'100%',
        marginLeft:scale(20)
    },
    number:{
        fontSize:scale(34),
        textAlign:'center',
        fontFamily:getFont.mandalore,
        color:colors.white,
        left:scale(10)
    },
    title:{
        fontSize:scale(26),
        letterSpacing:scale(1.5),
        fontFamily:getFont.mandalore,
        color:colors.white,
    },
    fd:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:scale(5),
    },
    txt:{
        color:colors.orange,
        fontFamily:getFont.mandalore,
        fontSize:scale(14)
    },
    sideView:{
        alignItems:'center',
        justifyContent:'center',
        flexShrink:1,
        padding:scale(10)
    }
})

{/* <View style={[currentState=='ACTIVE'? commonStyles.shadowBox:commonStyles.shadowBox2,{borderRadius:10,marginBottom:20}]}>
<View style={[styles.innerBox,{ 
  backgroundColor: currentState==='ACTIVE'? colors.black:colors.darkGray}]}>
    <ImageBackground source={getIcons(currentState=='ACTIVE'?'program1':'program2')}
    resizeMode='cover'
    style={[styles.img1,]}
    >
        <Text 
        style={[styles.number,{color:currentState=='ACTIVE'?colors.white:colors.black}]}>
            {ind+1}</Text>
        <Image
        source={getIcons('exercise')}
        resizeMode='contain'
        style={styles.img2}
        />
        <View style={{alignItems:
        'center',justifyContent:'center'}}>
            <Text
            style={styles.title}
            >
                {name}
                
            </Text>
            {currentState=='ACTIVE'?
            <View style={styles.fd}>
                <Image
                style={{height:20,width:20,}}
                resizeMode='contain'
                source={getIcons('')}
                />
                <Text 
                style={styles.txt}>
                    CURRENT PROGRAM
                </Text>
            </View>
            :
            <View>
            <CustomButton
            containerStyle={{height:30}}
            btnStyle={{height:20,width:'80%'}}
            fontStyle={{fontSize:12}}
            image={'button'}
            title={'SELECT PROGRAM'}
            />
            </View>
            }
        </View>
    </ImageBackground>
</View>
</View> */}

