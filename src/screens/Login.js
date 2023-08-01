import React,{useState} from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import CustomButton from '../components/CustomButton/CustomButton'
import CustomInput from '../components/CustomInput/CustomInput'
import { colors } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { getFont } from '../utils/getFont'
import getIcons from '../utils/geticon'

const Login = ({navigation}) => {

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const onActivation=()=>{
        if (email==''||password=='') {
            Alert.alert('Please fill all the fields')
        } else {
            navigation.navigate('CustomizeExp')
        }
    }

    return (
        <View style={commonStyles.container}>
             <Container isScrollable title={'LOGIN'}>
                <Image 
                source={getIcons('logo')}
                style={styles.logo}
                resizeMode='contain'
                />
                <Text style={styles.title}>AUTHENTIC STRENGTH</Text>
                <View style={{paddingHorizontal:scale(60),marginTop:scale(30)}}>
                    <CustomInput placeholder={'Your Email'}
                    onChangeText={(txt)=>setemail(txt)}/>
                    <CustomInput placeholder={'Password'}
                    onChangeText={(txt)=>setPassword(txt)}/>
                    <CustomButton  title='LOGIN' image={'button'} mt={scale(15)}
                    onPress={()=>onActivation()}/>
                    <Text style={styles.forget} 
                        onPress={()=>navigation.navigate('ForgetPass')}>FORGET YOUR PASSWORD ?
                    </Text>
                
                    <Image
                        source={getIcons('line')}
                        style={styles.line}
                        resizeMode='center'/>
                        <View style={styles.bottomTxtView}>
                            <Text style={styles.txt1}>Don't have an account, CLICK HERE TO</Text>
                            <Text style={[styles.txt1,styles.txt2,{marginTop:scale(10)}]}>ACTIVATE YOUR ACCOUNT</Text>
                        </View>
                        <CustomButton image={'button2'}
                            title={'ACTIVATE'}
                            titleColor={'#000'}
                            onPress={()=>navigation.navigate('AccountActivation')}
                        />
                    </View>
            </Container>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    logo:{
        height:scale(150),
        width:scale(150),
        alignSelf:'center',
    },
    title:{
        color:colors.white,
        fontFamily:getFont.mandalore,
        letterSpacing:scale(2),
        fontSize:scale(22),
        textAlign:'center',
        marginTop:scale(-20),
        marginBottom:scale(30)
    },
    forget:{
        fontSize:scale(16),
        color:colors.white,
        fontFamily:getFont.mandalore,
        letterSpacing:scale(2),
        marginTop:scale(10),
        marginBottom:scale(20),
        textAlign:'center'
    },
    line:{
        width:'100%',
        height:scale(5),
        marginTop:scale(10)
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
    bottomTxtView:{
        marginTop:scale(20),
        // flexDirection:'row',
        alignItems:'center'
    }
})
