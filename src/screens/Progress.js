import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Container from "../utils/Container";
import {commonStyles} from "../utils/commonStyles";
import { getFont } from '../utils/getFont';
import { colors } from '../utils/colors';
import { ProgressChart } from 'react-native-chart-kit';
import { scale } from 'react-native-size-matters';

const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
    colors: ["#0009","#00"]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0) => `rgba(155, 123, 67, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const Progress = () => {
    return (
        <View style={commonStyles.container}>
            <Container title={'PROGRESS'}>
                    <View style={{padding:scale(20)}}>
                        <View 
                            style={[commonStyles.shadowBox,styles.barContainer]}>
                            <Text style={styles.title}>Todays Workout Progress</Text>
                            <View style={styles.progressBarOuter}>
                            <View style={styles.progressBarInner}>
                                <Text style={styles.commonTxt}>ACTIVITY RATING</Text>
                                <Text style={styles.commonTxt}>
                                    80%
                                </Text>
                            </View>
                        </View>
                    </View>
                       <View style={[commonStyles.shadowBox,styles.barContainer]}>
                           <View>
                                <Text
                                 style={styles.title}>
                                    PROGRESS SUMMARY
                                </Text>

                                <ProgressChart
                                    data={data}
                                    width={scale(300)}
                                    height={scale(220)}
                                    strokeWidth={scale(16)}
                                    radius={scale(32)}
                                    chartConfig={chartConfig}
                                    hideLegend={false}
                                    />
                           </View>
                       </View>
                </View>
            </Container>
        </View>
    )
}

export default Progress

const styles = StyleSheet.create({
    barContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding:scale(20),
        backgroundColor:'#0009',
        marginTop:scale(30),
        marginBottom:scale(10)
    },
    title:{
        fontSize:scale(24),
        fontFamily:getFont.mandalore,
        color:colors.white,
        lineHeight:scale(40)
    },
    progressBarOuter:{
        height:scale(25),
        width:'90%',
        backgroundColor:colors.darkGray,
        borderRadius:scale(5),
        justifyContent:'center',
        padding:scale(3),
        marginTop:scale(10)
    },
    progressBarInner:{
        height:scale(23),
        width:'80%',
        backgroundColor:colors.orange,
        borderRadius:scale(3),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:scale(5)
    },
    commonTxt:{
        fontFamily:getFont.mandalore,
        fontSize:scale(14),
        letterSpacing:scale(1),
        color:colors.white
    },
})
