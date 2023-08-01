import React from 'react'
import {  Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Modal from "react-native-modal";
import { colors } from '../../utils/colors';
import { commonStyles } from '../../utils/commonStyles';
import { getFont } from '../../utils/getFont';
import getIcons from '../../utils/geticon';
import CustomButton from '../CustomButton/CustomButton';

const RecordStat = ({isVisible,onClose}) => {

    console.log('record stats',isVisible);

    return (
        <Modal 
        isVisible={isVisible}
        animationIn='bounceIn'
        animationOut='bounceOut'
        style={{padding:40}}
        onSwipeComplete={onClose}
        animationInTiming={2000}
        animationOutTiming={2000}
        >
            <View style={[styles.main,commonStyles.shadowBox2]}>
                <View style={{flexDirection:'row',backgroundColor:'#313131',borderRadius:10,overflow:'hidden'}}>
                    <ImageBackground style={styles.header}
                    source={getIcons('modalHeader')}>
                        <Text style={styles.title}>RECORD STAT</Text>
                    </ImageBackground>
                    <TouchableOpacity onPress={onClose}>
                        <Image
                        source={getIcons('close')}
                        style={{height:20,width:20,marginLeft:-30,marginTop:10}}
                        />
                    </TouchableOpacity>
                </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.txt1}>
                            BARBELL CURL SET <Text style={{color:colors.orange}}>#2</Text>
                        </Text>
                        <View style={styles.fd}>
                            <View style={[styles.inputView,styles.fd]}>
                                <TextInput style={{flex:1}} />
                                <View>
                                    <Image 
                                    source={getIcons('arrowUp')}
                                    style={styles.icon}
                                    resizeMode='contain'
                                    />
                                    <Image 
                                    source={getIcons('arrowDown')}
                                    style={styles.icon}
                                    resizeMode='contain'/>
                                </View>
                            </View>
                            <Text style={[styles.txt1,{left:10,marginTop:12}]}>LBS</Text>
                        </View>
                        <CustomButton image={'button'}
                        title={"START REST TIMER"}
                        fontStyle={{fontSize:24}}
                        onPress={onClose}
                        />
                </View>
            </View>
        </Modal>
    )
}

export default RecordStat

const styles = StyleSheet.create({
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
    main:{
        backgroundColor:'#313131',
        height:300,
        borderRadius:10,
    },
    closeBtn:{
        height:20,
        width:20,
    },
    txt1:{
        fontSize:28,
        fontFamily:getFont.mandalore,
        color:colors.white
    },
    bottomView:{
        padding:10,
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        backgroundColor:'#313131'
    },
    fd:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    inputView:{
        backgroundColor:colors.white,
        padding:2,
        height:30,
        width:80
    },
    icon:{
        height:15,
        width:15
    }
})
{/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View style={styles.inputView}>
                            <TextInput
                                style={{backgroundColor:colors.white,
                            }}
                            />
                            <View>
                                <Image source={getIcons('arrowUp')} style={{height:20,width:20}} resizeMode='contain'/>
                                <Image source={getIcons('arrowDown')} style={{height:20,width:20}} resizeMode='contain'/>
                            </View>
                        </View>
                        <Text style={[styles.txt1,{marginLeft:10}]}>LBS</Text>
                        </View> */}