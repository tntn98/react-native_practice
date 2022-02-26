import React from 'react'
import {Linking, TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const Buttonpage = ({navigation}) =>{
    return(
        <View style={{
            //justifyContent : 'center',
            alignItems : 'center',
            flex : 1,
            backgroundColor : 'skyblue'
        }}>
            <Text style={{
                flex : 2,
                fontSize : 50,
                fontWeight : 'bold',
                marginTop : 20
                }}>홈화면</Text>
            <View style={{
                justifyContent : 'center',
                alignItems : 'center',
                flex : 10
            }}>
                <TouchableOpacity
                onPress={() => navigation.navigate('id')}
                style={{
                    borderWidth : 1,
                    justifyContent : 'center',
                    alignItems : 'center',
                    backgroundColor : 'lime',
                    height : 100,
                    width : 370,
                    marginTop : 10,
                    marginBottom : 10
                }}>
                    <Text style = {{
                        fontSize : 30,
                        fontWeight : 'bold'
                    }}>학생증</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('music')}
                style={{
                    borderWidth : 1,
                    justifyContent : 'center',
                    alignItems : 'center',
                    backgroundColor : 'purple',
                    height : 100,
                    width : 370,
                    marginTop : 10,
                    marginBottom : 10
                }}>
                    <Text style = {{
                        fontSize : 30,
                        fontWeight : 'bold'
                    }}>플레이리스트</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://eclass.donga.ac.kr/')}
                style={{
                    borderWidth : 1,
                    justifyContent : 'center',
                    alignItems : 'center',
                    backgroundColor : 'pink',
                    height : 100,
                    width : 370,
                    marginTop : 10,
                    marginBottom : 10
                }}>
                    <Text style = {{
                        fontSize : 30,
                        fontWeight : 'bold'
                    }}>동아대학교 LMS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Buttonpage;