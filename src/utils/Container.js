import React from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/header/CustomHeader'
import getIcons from './geticon'


const Container = ({children,isScrollable,title}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={getIcons('mainBg')} style={{height:'100%',width:'100%'}}>
            <CustomHeader title={title}/>
                {
                    isScrollable?
                    <ScrollView showsVerticalScrollIndicator={false}>
                    {children}
                    </ScrollView>
                    :
                    children
                }
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({})
