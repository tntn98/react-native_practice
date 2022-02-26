import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ID from './id';
import Buttonpage from './buttonpage';
import music from './music';

const St = createNativeStackNavigator();

const Stackpage = () =>{
    return(
        <NavigationContainer>
            <St.Navigator initialRouteName='home' screenOptions={{headerShown : false}}>
                <St.Screen name='home' component={Buttonpage}/>
                <St.Screen name='id' component={ID}/>
                <St.Screen name='music' component={music}/>
            </St.Navigator>
        </NavigationContainer>
    );
};

export default Stackpage;