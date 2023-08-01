import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import CheckBox from 'react-native-check-box'
import { scale } from 'react-native-size-matters'
import CustomButton from '../components/CustomButton/CustomButton'
import CustomInput from '../components/CustomInput/CustomInput'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { getFont } from '../utils/getFont'
import getIcons from '../utils/geticon'


const AccountActivation = ({navigation}) => {

    const [isChecked, setIsChecked] = useState(false)
    const [email, setemail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
   
    const onAcivate=()=>{
        if (email==''||firstName==''||lastName==''||password==''||confirmPass=='') {
            Alert.alert('Please fill all the fields')
        } else {
            navigation.navigate('Login')
        }
    }


    return (
        <View style={commonStyles.container}>
                <Container title={'ACCOUNT ACTIVATION'} isScrollable>
                <View style={styles.inputView}>
                    <CustomInput
                        placeholder={'Your Email'}
                        onChangeText={(txt)=>setemail(txt)}
                    />
                    <CustomInput
                        placeholder={'First Name'}
                        onChangeText={(txt)=>setFirstName(txt)}

                    />
                    <CustomInput
                        placeholder={'Last Name'}
                        onChangeText={(txt)=>setLastName(txt)}

                    />
                    <CustomInput
                        placeholder={'Password'}
                        onChangeText={(txt)=>setPassword(txt)}

                    />
                    <CustomInput
                        placeholder={'Confirm Password'}
                        onChangeText={(txt)=>setConfirmPass(txt)}

                    />
                    <Image
                    source={getIcons('line')}
                    style={styles.line}
                    resizeMode='center'/>
                    <View style={{marginTop:20,
                    flexDirection:'row',alignItems:'center'}}>
                        <CheckBox
                        onClick={()=>setIsChecked(pre=>!pre)}
                        isChecked={isChecked}
                        checkedCheckBoxColor='#fff'
                        checkBoxColor={'#fff'}
                        />
                        <Text style={styles.txt1}>Check to agree to our</Text>
                        <Text style={[styles.txt1,styles.txt2]}>Terms and Conditions</Text>
                    </View>
                    <CustomButton image={'button'}
                        title={'ACTIVATE'}
                        onPress={()=>onAcivate()}
                    />
                </View>
            </Container>
        </View>  
    )
}

export default AccountActivation

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
        textShadowOffset: { width: scale(0.1), height:scale(0.1) },
        textShadowRadius:scale(0.5)
    },
    txt2:{
        textDecorationLine:'underline',
        textDecorationStyle:'solid',
        color:'#9b7b43'
    }
})
