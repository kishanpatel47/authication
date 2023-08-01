import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { getFont } from '../utils/getFont'
import getIcons from '../utils/geticon'
const data=[
    {
        name:'ACCOUNT PROFILE'
    },
    {
        name:'CUSTOMIZE EXPERIENCE'
    },
    {
        name:'ACCOUNTABILITY PARTNERS'
    },
    {
        name:'SWITCH PROGRAM'
    },
    {
        name:'LOGOUT'
    },
]


const Settings = ({navigation}) => {

    const onPress=(val)=>{
        switch (val) {
            case 'ACCOUNT PROFILE':
         return   navigation.navigate('Profile')
            case 'LOGOUT':
         return   navigation.navigate('Login')
            case 'SWITCH PROGRAM':
                return   navigation.navigate('SelectProgram')
            case 'ACCOUNTABILITY PARTNERS':
                return   navigation.navigate('AccontabilityPartners')
            case 'CUSTOMIZE EXPERIENCE':
                return    navigation.navigate('CustomizeExp')
        
            default:
                break;
        }
    }

    return (
        <View style={commonStyles.container}>
            <Container title={'SETTINGS'}>
                <View style={{padding:30}}>
                    <View style={commonStyles.shadowBox}>
                        {data.map((data,ind)=>{
                            return <TouchableOpacity style={styles.cardView} key={ind}
                            onPress={()=>onPress(data.name)}>
                            <Text style={styles.cardTxt}>{data.name}</Text>
                            <Image
                            source={getIcons('line')}
                            style={styles.bottomLine}
                            />
                        </TouchableOpacity>
                        })}
                    </View>
                </View>
            </Container>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    cardView:{
        height:70,
        padding:20,
        backgroundColor:'#0009'
    },
    cardTxt:{
        color:colors.white,
        fontSize:26,
        fontFamily:getFont.mandalore,
        letterSpacing:2
    },
    bottomLine:{
        width:'100%',
        height:1,
        marginTop:20
    }
})
