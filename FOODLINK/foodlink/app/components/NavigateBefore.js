import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 아이콘 사용 (Expo 설치 필요)

const NavigateBefore = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "center",
    top: 0, // 헤더 상단 간격
    left: 10, // 왼쪽 여백
    padding: 5,
    zIndex: 10, // 다른 요소 위에 표시
  },
});

export default NavigateBefore;
