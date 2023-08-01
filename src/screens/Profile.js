import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import CustomButton from '../components/CustomButton/CustomButton'
import CustomInput from '../components/CustomInput/CustomInput'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { getFont } from '../utils/getFont'
import getIcons from '../utils/geticon'

const Profile = ({navigation}) => {

    const [email, setemail] = useState('gaurav@saini.com');
    const [firstName, setFirstName] = useState('Gaurav');
    const [lastName, setLastName] = useState('Saini');
    const [height, setHeight] = useState('6 feet');
    const [weight, setWeight] = useState('70 Kg');

    return (
        <View style={[commonStyles.container]}>
            <Container title={'USER PROFILE'} isScrollable >
            <View style={styles.inputView}>

                    <View style={styles.profileImg}>
                        <Image
                        source={getIcons('userAvatar')}
                        resizeMode='contain'
                        style={[styles.userImg]}
                        />
                    </View>
                    <CustomInput
                        value={email}
                        placeholder={'Your Email'}
                        onChangeText={(txt)=>setemail(txt)}
                    />
                    <CustomInput
                        value={firstName}
                        placeholder={'First Name'}
                        onChangeText={(txt)=>setFirstName(txt)}

                    />
                    <CustomInput
                        value={lastName}
                        placeholder={'Last Name'}
                        onChangeText={(txt)=>setLastName(txt)}

                    />
                    <CustomInput
                        value={height}
                        placeholder={'Height'}
                        onChangeText={(txt)=>setHeight(txt)}

                    />
                    <CustomInput
                        value={weight}
                        placeholder={'Weight'}
                        onChangeText={(txt)=>setWeight(txt)}

                    />
                    <Image
                    source={getIcons('line')}
                    style={styles.line}
                    resizeMode='center'/>
                    <CustomButton image={'button'}
                        title={'update'}
                        onPress={()=>navigation.goBack('null')}
                    />
                </View>
            </Container>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    inputView:{
        paddingHorizontal:scale(60),
        marginTop:scale(20),
    },
    line:{
        width:'100%',
        height:scale(15),
       
    },
    txt1:{
        fontSize:scale(14),
        color:'#DCDCDC',
        fontFamily:getFont.mandalore,
        marginLeft:scale(10),
        letterSpacing:scale(0.5),
        textShadowColor:'#fff',
        textShadowOffset: { width: scale(0.1), height: scale(0.1) },
        textShadowRadius:scale(0.5)
    },
    txt2:{
        textDecorationLine:'underline',
        textDecorationStyle:'solid',
        color:'#9b7b43'
    },
    profileImg:{
        height:scale(120),
        width:scale(120),
        alignSelf:'center',
        backgroundColor:'red',
        marginBottom:scale(30),
        borderRadius:scale(80),
        overflow:'hidden'
    },
    userImg:{
        height:'100%',
        width:'100%'
    }
})
