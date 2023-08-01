import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import CustomButton from '../components/CustomButton/CustomButton'
import NutritionCard from '../components/NutritionCard'
import { colors } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { getFont } from '../utils/getFont'
import getIcons from '../utils/geticon'
import { nutritionData } from '../utils/MokeData'

const Nutrition = () => {
    return (
        <View style={[commonStyles.container]}>
            <Container title={'NUTRITION'} isScrollable> 
                <View style={{padding:scale(10)}}>
                    {
                    nutritionData.map((data,ind)=>{
                        return <NutritionCard 
                        key={ind}
                        name={data.name}
                        subTxt={data.subTxt}
                        />
                    })
                    }
                    
                </View>
                <View style={styles.fd}>
                    <ImageBackground
                    source={getIcons('forwardImg')}
                    style={styles.img1}
                    resizeMode='contain'
                    >
                        <View style={styles.txt1}>
                            <Text style={styles.txt1}>
                                ADAPTIVE SUPLIMENTS PACK
                            </Text>
                        </View>
                    </ImageBackground>
                    <Image
                    source={getIcons('protineBox')}
                    style={styles.img2}
                    resizeMode='cover'
                    />
                </View>
                <View style={{padding:scale(10) ,marginTop:scale(20)}}>
                    <View style={styles.detailsView}>
                        <Text style={styles.bannerTitle}>
                            NUTRITION FACTS
                        </Text>
                        <View style={[styles.fd,]}>
                            <View style={{width:'60%'}}>
                                <Text style={styles.nutrientsTxt}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                                </Text>
                                <CustomButton image={'button'}
                                title={'BUY NOW for $299'}
                                />
                            </View>
                            <Image source={getIcons('nutritionFacts')}
                            style={styles.protienBanner}
                            resizeMode='contain'
                            />
                        </View>
                    </View>
                    <View style={{marginTop:scale(20)}}>
                        <Text 
                            style={styles.bannerTitle}>
                            CALORIES INTAKE
                        </Text>
                        <Image
                            source={getIcons('chart')}
                            style={styles.chart}
                            resizeMode={'contain'}
                        />
                    </View>
                </View>
            </Container>
        </View>
    )
}

export default Nutrition

const styles = StyleSheet.create({
    img1:{
        height:scale(120),
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
    },
    img2:{
        height:scale(120),
        width:'30%',
        marginRight:scale(40)
    },
    fd:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    txt1:{
        color:colors.orange,
        fontSize:scale(26),
        width:'60%',
        fontFamily:getFont.mandalore,
        textAlign:'center'
    },
    detailsView:{
        backgroundColor:colors.darkGray,
        padding:scale(10)
    },
    bannerTitle:{
        fontSize:scale(24),
        fontFamily:getFont.mandalore,
        color:colors.white
    },
    protienBanner:{
        height:scale(250),
        width:scale(120)
    },
    nutrientsTxt:{
        fontSize:scale(12),
        marginTop:scale(10),
        color:colors.white,
        fontFamily:getFont.mandalore,
        letterSpacing:1
    },
    chart:{
        height:scale(250),
        width:'100%',
        marginTop:scale(20)
    }
})
