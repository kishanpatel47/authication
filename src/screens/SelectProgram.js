import React from 'react'
import {StyleSheet,  View } from 'react-native'
import { scale } from 'react-native-size-matters'
import ProgramsCard from '../components/ProgramsCard'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'
import { programsData } from '../utils/MokeData'

const SelectProgram = ({navigation}) => {
    return (
        <View style={commonStyles.container}>
            <Container title={'SELECT A PROGRAM'}>
                <View style={{padding:scale(20),}}>
                  {programsData.map((data,ind)=>{
                      return<ProgramsCard
                      key={ind}
                      name={data.name}
                      currentState={data.currentState}
                      ind={ind}
                      onPress={()=>navigation.navigate('BottomTab')}
                      />
                  }) }
                </View>
            </Container>
        </View>
    )
}

export default SelectProgram

const styles = StyleSheet.create({
  
})
