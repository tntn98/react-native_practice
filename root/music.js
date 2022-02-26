import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const playlists = [
  {
    title: '벚꽃엔딩',
    singer: '버스커버스커',
    count: '10m',
    img: require('../assets/busker.jpg')
  },
  {
    title: '밤편지',
    singer: '아이유',
    count: '100k',
    img: require('../assets/iu.jpg')
  },
  {
    title: 'Life Goes On',
    singer: '방탄소년단',
    count: '125m',
    img: require('../assets/bts.jpg')
  },
  {
    title: '편지',
    singer: '김광진',
    count: '10k',
    img: require('../assets/kimgwangjin.jpg')
  },
  {
    title: '드라마',
    singer: '아이유',
    count: '5k',
    img: require('../assets/iu2.jpg')
  },
  {
    title: '취중고백',
    singer: '김민석',
    count: '15k',
    img: require('../assets/kimminsuck.jpg')
  },
  {
    title: '불꽃놀이',
    singer: '다이나믹듀오',
    count: '20k',
    img: require('../assets/double_d.jpg')
  },
  {
    title: '오늘보다 내일의 너를 더 좋아하겠지',
    singer: '소각소각',
    count: '1.5k',
    img: require('../assets/sogack.jpg')
  },
  {
    title: 'This Is Me',
    singer: 'The Greatest Showman',
    count: '50k',
    img: require('../assets/greatest.jpg')
  },
  {
    title: '혜성',
    singer: '윤하',
    count: '1m',
    img: require('../assets/younha.jpg')
  },
]

const music = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'beige' }}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
        }}>재원's 플레이리스트!</Text>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView>
          {playlists.map((value) => {
            const [isModalVisible, setModalVisible] = useState(false);
            const toggleModal = () => {
              setModalVisible(!isModalVisible);
            };
            return (
              <View style={{
                height : 100,
                marginBottom: 3
              }}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{
                    borderWidth: 1
                  }}
                >
                  <Text>제목 : {value.title}</Text>
                  <Text>가수 : {value.singer}</Text>
                  <Text>조회수 : {value.count}</Text>
                </TouchableOpacity>
                <Modal
                  isVisible={isModalVisible}
                  animationType="slide"
                  transparent={true}
                  onBackdropPress={() => toggleModal()} //배경 터치시 모달 닫힘
                  onBackButtonPress={() => toggleModal()} //안드로이드 뒤로가기 누르면 모달 닫힘
                >
                  <View style={{
                    backgroundColor: 'white',
                    height: '65%',
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 10
                  }}>
                    <View style={{ flex: 1.1, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'NotoSansKR-Medium',
                        includeFontPadding: false,
                        marginTop: 3
                      }}>{value.title}</Text>
                    </View>

                    <View style={{ flex: 9 }}>
                      <Image
                        source={value.img}
                        style={{ width: '90%', height: '100%', alignSelf: 'center' }}
                        resizeMode="contain"
                      />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center' }}>

                      <TouchableOpacity onPress={() => toggleModal()}>

                        <Text style={{
                          textAlign: 'center',
                          fontSize: 20,
                          color: 'black',
                          fontFamily: 'NotoSansKR-Medium',
                          includeFontPadding: false
                        }}
                        >확인</Text>

                      </TouchableOpacity>

                    </View>
                  </View>
                </Modal>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default music;