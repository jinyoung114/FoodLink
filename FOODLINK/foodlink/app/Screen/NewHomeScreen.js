import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyScreen from '../Screen/MyScreen';
import MapScreen from '../Screen/mapContainer';

const Tab = createBottomTabNavigator();

// 탭 이름 및 제목 매핑
const TAB_TITLES = {
  홈: '홈',
  커뮤니티: '커뮤니티',
  '동네 지도': '동네 지도',
  채팅: '채팅',
  '내 게시판': '내 게시판',
};

// 아이콘 이름 매핑 
const ICONS = {
  홈: { focused: 'home', unfocused: 'home-outline' },
  커뮤니티: { focused: 'people', unfocused: 'people-outline' },
  '동네 지도': { focused: 'map', unfocused: 'map-outline' },
  채팅: { focused: 'chatbubble', unfocused: 'chatbubble-outline' },
  '내 게시판': { focused: 'clipboard', unfocused: 'clipboard-outline' },
};

// TabNavigator 정의
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={({ route }) => ({
        header: () => <CustomHeader title={TAB_TITLES[route.name]} />,
        tabBarStyle: {
          height: 50, // 탭 바 높이 조정
          paddingBottom: 10, // 아이콘 아래 여백 추가
          paddingTop: 10, // 아이콘 위 여백 추가
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused ? ICONS[route.name].focused : ICONS[route.name].unfocused;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="홈" component={HomeScreenContent} />
      <Tab.Screen name="커뮤니티" Screen = {MapScreen} />
      <Tab.Screen name="동네 지도" Screen = {MapScreen}/>
      <Tab.Screen name="채팅" Screen = {MapScreen}/>
      <Tab.Screen name="내 게시판" component={MyScreen} />
    </Tab.Navigator>
  );
};

// 홈 화면 콘텐츠
const HomeScreenContent = () => (
  <SafeAreaView style={styles.container}>
    <MyScreen />
  </SafeAreaView>
);

// CombinedHomeScreen 정의
const CombinedHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator />
    </SafeAreaView>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CombinedHomeScreen;
