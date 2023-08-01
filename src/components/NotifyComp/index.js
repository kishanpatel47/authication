import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../../utils/colors'
import { getFont } from '../../utils/getFont'
import getIcons from '../../utils/geticon'

const NotifyCom = () => {
    return (
        <TouchableOpacity>
        <View style={styles.msgsView}>
            <Image source={getIcons('userAvatar')}
            style={styles.avatarStyle} />
            <View style={styles.details}>
               <View style={styles.nameView}>
                    <Text style={styles.name}>
                        JOHN DOE
                    </Text>
                    <View style={styles.circle}/>
               </View>
                    <Text style={styles.txt} numberOfLines={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </Text>
                </View>
            </View>
                <Image
                source={getIcons('line')}
                style={styles.line}/>
        </TouchableOpacity>
    )
}

export default NotifyCom

const styles = StyleSheet.create({
    msgsView:{
        padding:scale(10),
        borderRadius:scale(5),
        // borderWidth:1,
        // borderColor:colors.borderBlue,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#0009',
    },
    avatarStyle:{
        height:scale(50),
        width:scale(50),
        borderRadius:scale(30)
    },
    details:{
        flex:1,
        padding:scale(5),
        left:scale(10)

    },
    nameView:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:scale(5)
    },
    circle:{
        backgroundColor:colors.lightOrange,
        height:scale(10),
        width:scale(10),
        borderRadius:scale(15),
        marginLeft:scale(10)
    },
    name:{
        color:colors.white,
        fontFamily:getFont.mandalore,
        fontSize:scale(18),
        letterSpacing:scale(1),
    },
    txt:{
        color:colors.white,
        fontFamily:getFont.arial,
        fontWeight:'400'
    },
    line:{
        width:'100%',
        height:scale(1),
    }
})
