import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅 추가
import { styles } from "../Style/MyFoodScreen.style";
import NavigateBefore from "../components/NavigateBefore";
import { MaterialIcons } from "@expo/vector-icons";

const MyFoodScreen = () => {
  const navigation = useNavigation(); // navigation 객체 가져오기
  const [rating, setRating] = useState(4); // 초기 별점 설정

  // 게시물 데이터 (건들지 않음)
  const posts = Array(12).fill("게시물");

  // 카메라 버튼 클릭 핸들러
  const handleCameraPress = () => {
    Alert.alert("카메라 버튼 클릭", "카메라 기능 호출 예정");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 헤더 */}
        <View style={styles.header}>
          <NavigateBefore onPress={() => navigation.goBack()} /> {/* navigation 사용 */}
          <Text style={styles.title}>내 레시피</Text>
          <View style={styles.emptySpace} />
        </View>

        {/* Separator */}
        <View style={styles.separator} />
        <View style={styles.profileCard}>
          {/* 카메라 버튼 */}
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={handleCameraPress}
          >
            <MaterialIcons name="camera-alt" size={40} color="#2D754E" />
          </TouchableOpacity>
          {/* 배출 절감 메시지 */}
          <Text style={styles.profileText}>
            <Text style={styles.highlightText}>동길님</Text>
            <Text> 냉장고에{"\n"} 식자재를 추가해보세요.</Text>
          </Text>
        </View>

        {/* 게시물 그리드 (건들지 않음) */}
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {posts.map((post, index) => (
            <TouchableOpacity key={index} style={styles.gridItem}>
              <Text style={styles.gridText}>
                {post} {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyFoodScreen;
