import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet,  View } from 'react-native'
import { scale } from 'react-native-size-matters'
import CustomButton from '../components/CustomButton/CustomButton'
import CustomInput from '../components/CustomInput/CustomInput'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import getIcons from '../utils/geticon'


const {width,height}=Dimensions.get('window');

const ForgetPass = ({navigation}) => {

    const [email, setEmail] = useState('');

    return (
        <View style={[commonStyles.container]}>
            <Container isScrollable title={'FORGET PASSWORD'}>
                <View style={{paddingHorizontal:scale(30),}}>
                    <Image
                        source={getIcons('logo')}
                        resizeMode='contain'
                        style={{height:scale(250),width:scale(250),alignSelf:'center'}}
                    />
                    <CustomInput placeholder={'Your Email'}
                            value={email}
                            onChangeText={(txt)=>setEmail(txt)}/>
                    <CustomButton
                        title={'SEND RESET LINK'}
                        image={"button"}
                        btnStyle={{width:'80%',alignSelf:'center'}}
                        onPress={()=>navigation.goBack(null)}
                    />
                </View>
            </Container>
        </View>
    )
}

export default ForgetPass

const styles = StyleSheet.create({})
