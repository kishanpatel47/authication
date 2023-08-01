import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters';
import PartnersCard from '../components/AccPartCards/PartnersCard';
import { colors } from '../utils/colors';
import { commonStyles } from '../utils/commonStyles'
import Container from "../utils/Container";
import { getFont } from '../utils/getFont';

const AccontabilityPartners = ({navigation}) => {

    const onAddMore=()=>{
        navigation.navigate('AccountabilityPartnerTwo')
    }

    return (
        <View style={commonStyles.container}>
            <Container title={'ACCOUNTABLIIITY PARTNERS'}>
                <View style={styles.mainView}>
                    <PartnersCard/>
                    <PartnersCard/>
                    <PartnersCard/>
                    <View style={[commonStyles.shadowBox]}>
                        <TouchableOpacity
                        onPress={()=>onAddMore()}
                        style={[styles.addMoreBtn]}
                        activeOpacity={0.5}>
                            <Text style={styles.btnTitle}>
                                + ADD MORE
                                </Text>
                            <Text style={styles.maxPrtnersTxt}>[ Max 5 Accountability Partners ] </Text>
                        </TouchableOpacity>
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
    addMoreBtn:{
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        padding:scale(10)
    },
    maxPrtnersTxt:{
        color:colors.textGray,
        fontSize:scale(12),
        fontFamily:getFont.mandalore,
        marginTop:scale(5)
    },
    btnTitle:{
        color:colors.white,
        fontSize:scale(24),
        fontFamily:getFont.mandalore
    }
})
