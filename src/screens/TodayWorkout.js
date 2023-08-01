import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import WorkoutList from '../components/ColapsibleList'
import RecordStat from '../components/Modals/RecordStat'
import RestTimer from '../components/Modals/RestTimer'
import { colors } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { getFont } from '../utils/getFont'
import getIcons from '../utils/geticon'


const TodayWorkout = () => {

    const [recordStatsModal, setRecordStatsModal] = useState(false);
    const [restTimmerModal, setRestTimmerModal] = useState(false);

    return (
        <View style={[commonStyles.container,commonStyles.fd]}>
          <Container title={"TODAY'S WORKOUT" } isScrollable>
            <View style={[commonStyles.fd,{justifyContent:'space-between'}]}>
                <ImageBackground
                    source={getIcons('forwardImg')}
                    style={styles.topImg}
                    resizeMode='center'
                >
                    <Text style={styles.dayTxt}>DAY 56</Text>
                </ImageBackground>
                <Text style={[styles.name]} numberOfLines={2}>
                    {`Back & BICEPS`}
                </Text>
            </View>
            <View style={{padding:10}}>
                <View style={[styles.notes]}>
                    <Text style={[styles.txt1,{textAlign:'center'}]}>Notes</Text>
                    <Text style={[styles.txt1,{fontSize:14}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
                </View>
            <WorkoutList onStart={()=>setRecordStatsModal(true)}/> 
            <View style={{marginTop:20}}>
                        <Text 
                            style={styles.bannerTitle}>
                            CURRENT STATS
                        </Text>
                        <Image
                            source={getIcons('chart')}
                            style={styles.chart}
                            resizeMode={'contain'}
                        />
                    </View>
            </View>
          </Container>
          <RecordStat isVisible={recordStatsModal} 
            onClose={()=>{
                setRecordStatsModal(false)
            //   setRestTimmerModal(true)
            }}
           />
          {/* <RestTimer isVisible={restTimmerModal} 
          onClose={()=>setRestTimmerModal(false)} /> */}
        </View>
    )
}

export default TodayWorkout

const styles = StyleSheet.create({
    topImg:{
        height:scale(120),
        width:'70%',
        marginTop:scale(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:scale(15),
        
    },
    dayTxt:{
        fontSize:scale(40),
        fontFamily:getFont.mandalore,
        color:colors.orange
    },
    name:{
        fontSize:scale(40),
        color:colors.white,
        fontFamily:getFont.mandalore,
        flexShrink:1,
        marginLeft:scale(-50)
    },
    notes:{
        backgroundColor:colors.darkGray,
        padding:scale(15),
    },
    txt1:{
        fontSize:scale(20),
        color:colors.white,
        fontFamily:getFont.mandalore,
        letterSpacing:scale(1),
        marginBottom:scale(10),
        lineHeight:scale(15)
    },
    bannerTitle:{
        fontSize:scale(24),
        fontFamily:getFont.mandalore,
        color:colors.white
    },
    chart:{
        height:scale(250),
        width:'100%',
        marginTop:scale(20)
    }
})
