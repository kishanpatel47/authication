import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../../utils/colors'
import { getFont } from '../../utils/getFont'

const TwoButtonsRow = ({selected,onPress,data}) => {
    return (
        <View style={styles.fd}>
            {
                data?.map((data,ind)=>{
                    return <TouchableOpacity key={ind}
                    onPress={()=>onPress(ind)}
                    style={[styles.btn,{backgroundColor:
                    selected===ind?colors.orange:colors.darkGray}]}>
                        <Text 
                        style={styles.options}>
                            {data.name}
                            </Text>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

export default TwoButtonsRow

const styles = StyleSheet.create({
    fd:{
        flexDirection:'row',
        // justifyContent:'center',
        alignSelf:'center',
        
    },
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:scale(5),

    },
    options:{
        color:colors.white,
        fontSize:scale(18),
        fontFamily:getFont.mandalore
    }
})
