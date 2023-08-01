import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "./colors";
import { getFont } from "./getFont";

export const commonStyles=StyleSheet.create({
    container:{
        flex:1
    },
    shadowBox:{
        backgroundColor:'#0009',//'rgba(52, 52, 52, 0.5)',
        borderColor:colors.borderBlue,
        borderWidth:scale(1),
        shadowColor: colors.borderBlue,
        shadowOffset: {
            width: scale(0),
            height: scale(6),
        },
        shadowOpacity: scale(0.37),
        shadowRadius: scale(7.49),

        elevation: scale(12),
    },
    shadowBox2:{
        backgroundColor:'#0009',
        borderColor:colors.orange,
        borderWidth:1,
        shadowColor: colors.orange,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    title:{
        fontSize:scale(18),
        fontFamily:getFont.mandalore,
        color:colors.white,
        textAlign:"center",
        margin:scale(20),
    },
    fd:{
        flexDirection:'row',
        alignItems:'center',
    }
})