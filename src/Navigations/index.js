import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import AccountActivation from '../screens/AccountActivation';
import CustomizeExp from '../screens/CustomizeExp';
import SelectProgram from '../screens/SelectProgram';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import Notifications from '../screens/Notifications';
import Nutrition from '../screens/Nutrition';
import getIcons from '../utils/geticon';
import TodayWorkout from '../screens/TodayWorkout';
import Stats from '../screens/Stats';
import AccontabilityPartners from '../screens/AccontabilityPartners';
import AccountabilityPartnerTwo from '../screens/AccountabilityPartnerTwo';
import SendReport from '../screens/SendReport';
import Progress from '../screens/Progress';
import ForgetPass from '../screens/ForgetPass';
import Profile from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { scale } from 'react-native-size-matters';
import { colors } from '../utils/colors';

// 

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


const RootRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="AccountActivation" component={AccountActivation}
                options={{headerShown:false}} />
                <Stack.Screen name="Login" component={Login}
                options={{headerShown:false}} />
                <Stack.Screen name="CustomizeExp" component={CustomizeExp} />
                <Stack.Screen name="AccontabilityPartners" component={AccontabilityPartners} />
                <Stack.Screen name="AccountabilityPartnerTwo" component={AccountabilityPartnerTwo} />
                <Stack.Screen name="SendReport" component={SendReport} />
                <Stack.Screen name="ForgetPass" component={ForgetPass} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="SelectProgram" component={SelectProgram} />
                <Stack.Screen name="Progress" component={Progress} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
            </Stack.Navigator>
      </NavigationContainer>
    )
}


function BottomTab() {
    return (
      <Tab.Navigator screenOptions={{headerShown:false,
      tabBarActiveTintColor:colors.orange,
      tabBarInactiveTintColor:'#D3D3D3',
      tabBarShowLabel:false}}>
       
            <Tab.Screen name="TodayWorkout" component={TodayWorkout}
                options={{tabBarIcon:({color})=>
                <FontAwesome5 
                    name='dumbbell' 
                    size={scale(30)}
                    color={color}
                />}} />
       
            <Tab.Screen name="Stats" component={Stats}
                options={{tabBarIcon:({color})=>
                <MaterialCommunityIcons 
                    name='chart-timeline-variant' 
                    size={scale(30)}
                    color={color}
                />}} />
      
            <Tab.Screen name="Notifications" component={Notifications}
               options={{tabBarIcon:({color})=>
               <Ionicons 
                   name='notifications' 
                   size={scale(30)}
                   color={color}
               />}}  />
        
            <Tab.Screen name="Nutrition" component={Nutrition} 
        
            options={{tabBarIcon:({color})=>
               <MaterialCommunityIcons 
                   name='silverware-fork-knife' 
                   size={scale(30)}
                   color={color}
               />}}
            />
                
            <Tab.Screen name="Settings" component={Settings}
              options={{tabBarIcon:({color})=>
              <Ionicons 
                  name='settings' 
                  size={scale(30)}
                  color={color}
              />}}/>
      
      </Tab.Navigator>
    );
  }


export default RootRouter;

