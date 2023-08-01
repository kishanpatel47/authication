import React from 'react'
import {  StyleSheet, Text,Dimensions ,View, TextInput, Image } from 'react-native'
import { scale } from 'react-native-size-matters'
import CustomButton from '../components/CustomButton/CustomButton'
import { colors } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { getFont } from '../utils/getFont'
import getIcons from '../utils/geticon'

const {width,height} = Dimensions.get('window')

const SendReport = ({navigation}) => {
    return (
        <View style={commonStyles.container}>
            <Container title={'ACCOUNTABILITY PARTNER'}>
                <View style={{padding:scale(20)}}>
                    <Text style={styles.reportTxt}>
                        SEND REPORT
                    </Text>
                    <View style={[commonStyles.shadowBox,{marginTop:scale(30),padding:scale(20),backgroundColor:'#0009',borderRadius:scale(5)}]}>
                        <View style={[styles.selectPersonViewStyle]}>
                                <View 
                                    style={[styles.selectDropdownInput,commonStyles.fd]}>
                                        <View style={[styles.selectedPersonView,
                                            commonStyles.fd]}>
                                            <Text style={styles.name}>
                                                John Doe
                                            </Text>
                                            <Image
                                            source={getIcons('close')}
                                            style={{height:scale(10),
                                            width:scale(10),}}
                                            />
                                        </View>
                                        <CustomButton
                                            image={'button2'}
                                            btnStyle={{height:scale(20),
                                            width:scale(50),marginLeft:scale(120)}}
                                            mt={scale(-2)}
                                            title="ADD"
                                            fontStyle={{fontSize:scale(14)}}
                                            titleColor={colors.black}
                                    />
                                </View>
                                <View>
                                    {/* suggestions */}
                                </View>
                          
                        </View>
                        <View style={[commonStyles.fd,styles.presetView]}>
                            <TextInput
                            style={styles.presetInput}
                            placeholder={'Select preset'}
                            placeholderTextColor={colors.textGray}
                            />
                            <Image
                                source={getIcons('arrowDown')}
                                resizeMode='contain'
                                style={{height:scale(15),width:scale(20)}}
                            />
                        </View>
                        <TextInput
                        style={styles.msgInput}
                        multiline={true}
                        placeholder="Message"
                        placeholderTextColor={colors.textGray}
                        textAlignVertical='top'
                        />
                        <CustomButton
                        image={'button'}
                        title={'SEND'}
                        btnStyle={{width:"80%",alignSelf:'center'}}
                        onPress={()=>navigation.navigate('Progress')}
                        />
                    </View>
                </View>
            </Container>
        </View>
    )
}

export default SendReport

const styles = StyleSheet.create({
    reportTxt:{
        fontSize:scale(26),
        color:'#ffff',
        fontFamily:getFont.mandalore,
        textAlign:'center',
        marginTop:scale(20)
    },
    msgInput:{
        backgroundColor:colors.white,
        height:scale(200),
        borderRadius:scale(5),
        padding:scale(10),
        fontSize:scale(18)
    },
    presetInput:{
        flex:1,
        fontSize:scale(18),
        backgroundColor:colors.white,
    },
    presetView:{
        backgroundColor:colors.white,
        marginBottom:scale(15),
        borderRadius:scale(5),
        padding:scale(5)

    },
    selectDropdownInput:{
        backgroundColor:colors.white,
        marginBottom:scale(15),
        padding:scale(10),
        borderRadius:scale(5),
        fontSize:scale(18),
    },
    selectedPersonView:{
        backgroundColor:colors.orange,
        paddingHorizontal:scale(5),
        borderRadius:scale(3),        
    },
    name:{
        color:colors.white,
        right:scale(5),
        fontWeight:'600'
    }
})
