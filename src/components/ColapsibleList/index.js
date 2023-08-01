import React,{useState} from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import { colors } from '../../utils/colors';
import { commonStyles } from '../../utils/commonStyles';
import { getFont } from '../../utils/getFont';
import getIcons from '../../utils/geticon';

const SECTIONS = [
    {
      title: 'EXERCISE #1',
      content: 'Lorem ipsum...',
    },
    {
      title: 'EXERCISE #1',
      content: 'Lorem ipsum...',
    },
  ];

const WorkoutList = ({onStart}) => {

    const [activeSections, setactiveSections] = useState([0]);
    
   const renderHeader = (section) => {
        return (
          <ImageBackground style={[{height:40,padding:10,justifyContent:'space-between'},commonStyles.fd]} source={getIcons('button2')}>
                <Text style={styles.headerText}>
                   {section.title}
                </Text>
            <ImageBackground source={getIcons('button')} style={{height:25,width:100,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.btnTxt}>COMPLETED</Text>
            </ImageBackground>
          </ImageBackground>
        );
      };
    
    const renderContent = (section) => {
        return (
          <View style={{backgroundColor:colors.darkGray,padding:20}}>

            <View style={[commonStyles.fd,{justifyContent:'space-between',marginBottom:10}]}>
                <Text style={styles.txt}>SET #1</Text>
                <Text style={styles.txt}>10 REPS</Text>
                <Text style={styles.txt}>PREV: 25LBS</Text>
                <TouchableOpacity onPress={onStart}>
                    <ImageBackground source={getIcons('redButton')} style={{height:25,    width:100,justifyContent:'center',alignItems:'center'}}>
                      <Text style={styles.btnTxt}>Start</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={[commonStyles.fd,{justifyContent:'space-between'}]}>
                <Text style={styles.txt}>SET #1</Text>
                <Text style={styles.txt}>10 REPS</Text>
                <Text style={styles.txt}>PREV: 25LBS</Text>
                    <ImageBackground source={getIcons('button')} style={{height:25,width:100,justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.btnTxt}>Pending</Text>
                </ImageBackground>
            </View>

            <View style={[commonStyles.fd,{justifyContent:'space-between'}]}>
                <View style={{width:'60%'}}>
                    <Text style={{color:colors.orange,fontFamily:getFont.mandalore,
                    fontSize:20}}>OPTIONAL EXECUTION</Text>
                    <Text style={{color:colors.white,
                    fontFamily:getFont.mandalore,
                    fontSize:14}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
                </View>
                <Image source={getIcons('exercise')}
                resizeMode='contain'
                style={{height:100,width:100}}
                />
            </View>
          </View>
        );
      };
    
   const updateSections = (activeSections) => {
        setactiveSections(activeSections);
      };
    
      return (
            <Accordion
              activeSections={activeSections}
              sections={SECTIONS}
              renderHeader={renderHeader}
              renderContent={renderContent}
              onChange={updateSections}
              containerStyle={{marginTop:5}}
              sectionContainerStyle={{padding:5}}
            />
    );
}

export default WorkoutList

const styles = StyleSheet.create({
    headerText:{
        color:colors.black,
        fontFamily:getFont.mandalore,
        fontSize:16
    },
    btnTxt:{
        fontSize:16,
        fontFamily:getFont.mandalore,
        color:colors.white
    },
    txt:{
        fontSize:16,
        color:colors.white,
        fontFamily:getFont.mandalore
    }
})
