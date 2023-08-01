import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters';
import PartnersCard from '../components/AccPartCards/PartnersCard';
import CustomButton from '../components/CustomButton/CustomButton';
import NotifyCom from '../components/NotifyComp';
import { colors } from '../utils/colors';
import { commonStyles } from '../utils/commonStyles'
import Container from "../utils/Container";
import { getFont } from '../utils/getFont';
const AccontabilityPartners = ({navigation}) => {
    return (
        <View style={commonStyles.container}>
            <Container title={'ACCOUNTABILITY PARTNER'} isScrollable>
                <View style={styles.mainView}>
                    <PartnersCard/>
                    <CustomButton
                        onPress={()=>navigation.navigate('SendReport')}
                        image={'button2'}
                        title={'SEND DAILY REPORT'}
                        titleColor={colors.black}
                    />
                    {/* <TouchableOpacity style={styles.sendBtn}>
                        <ImageBackground 
                        source={getIcons('button2')} style={styles.btnImg}>
                            <Text style={styles.sendTxt}>
                                SEND DAILY REPORT
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity> */}
                    <Text style={styles.msgTxt}>
                        MESSEGES
                    </Text>
                    <View style={commonStyles.shadowBox}>
                        <NotifyCom/>
                        <NotifyCom/>
                    </View>
                </View>
            </Container>
        </View>
    )
}

export default AccontabilityPartners

const styles = StyleSheet.create({
    mainView:{
        padding:scale(30),   
    },
    sendBtn:{
        height:scale(40),
        marginTop:scale(20),
       
        borderRadius:scale(5)
    },
    btnImg:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    sendTxt:{
        fontFamily:getFont.mandalore,
        letterSpacing:scale(2),
        fontSize:scale(18)
    },
    msgTxt:{
        fontSize:scale(28),
        color:colors.white,
        textAlign:'center',
        marginTop:scale(20),
        fontFamily:getFont.mandalore,
        letterSpacing:scale(1.5),
        marginBottom:scale(20)
    },
    
})
