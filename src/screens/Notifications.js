import React from 'react'
import { View,  StyleSheet, } from 'react-native'
import { scale } from 'react-native-size-matters'
import NotifyCom from '../components/NotifyComp'
import { commonStyles } from '../utils/commonStyles'
import Container from '../utils/Container'

const Notifications = () => {
    return (
        <View style={commonStyles.container}>
                {/* <CustomHeader title={'NOTIFICATION'}/> */}
            <Container isScrollable title={'NOTIFICATIONS'}>
                <View style={{padding:scale(20)}}>
                    <View style={commonStyles.shadowBox}>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                           <NotifyCom/>
                    </View>
                </View>
            </Container>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
})
