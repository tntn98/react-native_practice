import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class Photo extends Component {
  render() {
    let Pho = '';
    if (this.props.type === 'face') {
      Pho = require('../assets/FACE.jpg');
    } else if (this.props.type === 'qr') {
      Pho = require('../assets/QR.png');
    }
    return (
      <View>
        <Image source={Pho} style={{ width: 130, height: 130 }} />
      </View>
    );
  }
}

const ID = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.header}> 모바일 학생증</Text>
        <Text> </Text>
        <Text> </Text>
        <View style={{ flexDirection: 'row' }}>
          <Photo type="face" />
          <Text> </Text>
          <Photo type="qr" />
        </View>
        <Text> </Text>
        <Text> </Text>
        <View>
          <View style={styles.sub_border}>
            <Text style={styles.sub_header}>성명</Text>
            <Text style={styles.body}> 김재원</Text>
          </View>
          <View style={styles.sub_border}>
            <Text style={styles.sub_header}>대학</Text>
            <Text style={styles.body}> 공과대학</Text>
          </View>
          <View style={styles.sub_border}>
            <Text style={styles.sub_header}>학과</Text>
            <Text style={styles.body}> 컴퓨터공학과</Text>
          </View>
          <View style={styles.sub_border}>
            <Text style={styles.sub_header}>학번</Text>
            <Text style={styles.body}> 0000000</Text>
          </View>
          <View style={styles.last_sub_border}>
            <Text style={styles.sub_header}>생년월일</Text>
            <Text style={styles.body}>1998.00.00</Text>
          </View>
          <View></View>
        </View>
      </View>
      <Text style={styles.mar_top}>위 사람은 동아대학교 학생임을 증명합니다.</Text>
      <Text style={styles.mar_top}>2021년 04월 08일</Text>
      <View style={styles.mar_top2}>
        <Image source={require('../assets/LOGO.jpg')} style={{ width: 100, height: 100 }} />
        <Text> </Text>
        <View>
          <Text style={styles.univ}> 동아대학교</Text>
          <Text>DONG-A UNIVERSITY</Text>
        </View>
      </View>
    </View>
  );
};
export default ID;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  border: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 550,
    width: 350,
    borderWidth: 5,
    alignItems: 'center',
  },
  sub_border: {
    height: 53,
    width: 350,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  last_sub_border: {
    height: 53,
    width: 350,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'indigo',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 25,
    width: 340,
    alignItems: 'center',
    fontFamily: 'SomeFont',
    color: 'white',
  },
  sub_header: {
    marginLeft: 50,
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    marginLeft: 60,
    fontSize: 18,
  },
  mar_top: {
    marginTop: 10,
  },
  mar_top2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  univ: {
    fontSize: 23,
    marginTop: 15,
  },
});
