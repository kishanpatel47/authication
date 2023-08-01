import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from "react-native-modal";
import { colors } from '../../utils/colors';
import { commonStyles } from '../../utils/commonStyles';
import { getFont } from '../../utils/getFont';
import getIcons from '../../utils/geticon';
import CustomButton from '../CustomButton/CustomButton';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const RestTimer = ({isVisible,onClose}) => {


    console.log('RestTimmer',isVisible);

    return (
        <Modal 
        isVisible={isVisible}
        onSwipeComplete={onClose}
        animationIn='bounceIn'
        animationOut='bounceOut'
        style={{padding:40}}
        >
            <View style={[styles.main,commonStyles.shadowBox2]}>
                <View style={[styles.subView]}>
                    <ImageBackground style={styles.header}
                        source={getIcons('modalHeader')}>
                            <Text style={styles.title}>
                                RECORD STAT
                            </Text>
                    </ImageBackground>
                    <TouchableOpacity onPress={onClose}>
                        <Image
                            source={getIcons('close')}
                            style={{height:20,width:20,marginLeft:-30,marginTop:10}}
                        />
                    </TouchableOpacity>
                   
                   
                </View>
                <View style={styles.subView2}>
                <CountdownCircleTimer
                    onComplete={() => {
                    // do your stuff here
                    return [true, 2000] // repeat animation in 1.5 seconds
                    }}
                    isPlaying
                    duration={60}
                    colors={[
                        ['#004777', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                      ]}
                      size={150}
                      rotation='counterclockwise'
                      children={({remainingTime,timeElapses})=> {
                        return(
                            <Text style={styles.time}>
                                {remainingTime}
                            </Text>
                        )
                        }}
                />                    
                    <CustomButton
                        image='button'
                        title={'NEXT SET'}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default RestTimer

const styles = StyleSheet.create({

    main:{
        backgroundColor:'#313131',
        height:300,
        borderRadius:10,
    },
    subView:{
        flexDirection:'row',
        backgroundColor:colors.darkGray,
        borderRadius:10,
        overflow:'hidden',
        borderBottomEndRadius:0,
        borderBottomStartRadius:0
    },
    header:{
        height:50,
        justifyContent:'center',
        alignSelf:'center',
        width:'100%',
    
    },
    title:{
        fontSize:24,
        fontFamily:getFont.mandalore,
        color:colors.white,
        letterSpacing:1.5,
        textAlign:'center'
    },
    subView2:{
        backgroundColor:colors.darkGray,
        flex:1,
        borderRadius:10,
        borderTopEndRadius:0,
        borderTopStartRadius:0,
        paddingTop:20,
        padding:60
    },
    time:{
        color:colors.white,
        fontSize:40,
        fontFamily:getFont.mandalore
    }
})