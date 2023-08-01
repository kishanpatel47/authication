import React, { useState } from 'react'
import {  ImageBackground,  StyleSheet, Text,  View } from 'react-native'
import TwoButtonsRow from '../components/ButonsRow/TwoButtons';
import { colors } from '../utils/colors';
import {commonStyles} from "../utils/commonStyles";
import Container from '../utils/Container';
import { getFont } from '../utils/getFont';
import getIcons from '../utils/geticon';
import IncrementerBtn from "../components/IncrementerBtn";
import { activityLevelData, goalsData, measureUnits, selectGender, userData } from '../utils/MokeData';
import CustomButton from '../components/CustomButton/CustomButton';
import { scale } from 'react-native-size-matters';


const CustomizeExp = ({navigation}) => {

    const [gender, setGender] = useState(0);
    const [unit, setUnit] = useState(0);
    const [activityLevel, setActivityLevel] = useState(0);
    const [goal, setGoal] = useState(0);

    return (
        <View style={commonStyles.container}>
           <Container title={'CUSTOMIZE YOUR EXPERIENCE'} isScrollable>
               <View style={{padding:scale(20)}}>
                    <ImageBackground source={getIcons('polygon')} style={styles.poly}
                    resizeMode='contain'>
                        <Text style={styles.txt1}>
                            WHAT DO YOU WANT TO WORK ON
                        </Text>
                    </ImageBackground>
                    <TwoButtonsRow data={selectGender} selected={gender}
                    onPress={(ind)=>setGender(ind)}/>
                    <Text style={commonStyles.title}>
                        UNITS OF MEASURE
                    </Text>
                    <TwoButtonsRow data={measureUnits} selected={unit}
                    onPress={(ind)=>setUnit(ind)}/>
                    <View style={styles.fd}>
                        {
                            userData.map((data,ind)=>{
                                return  <IncrementerBtn
                                key={ind}
                                data={data.data}
                                title={data.name}
                                />
                            })
                        }
                    </View>
                    <View >
                        <Text style={commonStyles.title}>ACTIVITY LEVEL</Text>
                        <TwoButtonsRow 
                        data={activityLevelData} 
                        selected={activityLevel}
                        onPress={(ind)=>setActivityLevel(ind)}/>  
                    </View>
                    <View>
                        <Text style={commonStyles.title}>GOAL</Text>
                        <TwoButtonsRow 
                        data={goalsData} 
                        selected={goal}
                        onPress={(ind)=>setGoal(ind)}/>  
                    </View>
                    <CustomButton
                    image={'button2'}
                    title={'SAVE CHANGES'}
                    titleColor={colors.black}
                    onPress={()=>navigation.navigate('SelectProgram')}
                    />
               </View>
           </Container>
        </View>
    )
}

export default CustomizeExp

const styles = StyleSheet.create({
    poly:{
        height:scale(120),
        alignItems:'center',
        justifyContent:"center",
        marginBottom:scale(40)
    },
    txt1:{
        fontSize:scale(32),
        width:'60%',
        textAlign:'center',
        color:colors.white,
        fontFamily:getFont.mandalore
    },
    txt2:{
        margin:scale(20),
        fontSize:scale(20),
        color:colors.white,
        textAlign:'center',
        fontFamily:getFont.mandalore
    },
    fd:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:scale(30)
    }    
})
