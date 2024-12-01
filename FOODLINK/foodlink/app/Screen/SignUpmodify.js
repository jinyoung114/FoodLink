import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { styles } from "../Style/SignUpmodify.style";
import NavigateBefore from "../components/NavigateBefore";

const SignUpmodify = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* NavigateBefore 버튼 */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 20,
              left: 25, // 화면의 가장 왼쪽
              zIndex: 10,
            }}
          >
            <NavigateBefore />
          </TouchableOpacity>
          <Text style={styles.headerText}>정보 수정하기</Text>
          <View style={styles.rectangle} />
        </View>

        {/* Form */}
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.label}>아이디*</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
            placeholderTextColor="#c6c6c6"
          />

          <Text style={styles.label}>비밀번호*</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="8자 이상의 영문 혹은 영문과 숫자를 조합"
            placeholderTextColor="#c6c6c6"
            secureTextEntry
          />

          <Text style={styles.label}>비밀번호 확인*</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="비밀번호를 한 번 더 입력해주세요"
            placeholderTextColor="#c6c6c6"
            secureTextEntry
          />

          <Text style={styles.label}>닉네임*</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="2자 이상의 한글 혹은 한글과 숫자를 조합"
            placeholderTextColor="#c6c6c6"
          />

          <Text style={styles.label}>이메일*</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="예) sunmoon123@sunmoon.kr"
            placeholderTextColor="#c6c6c6"
            keyboardType="email-address"
          />

          <Text style={styles.label}>휴대폰*</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="숫자만 입력해주세요"
            placeholderTextColor="#c6c6c6"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>생년월일</Text>
          <View style={styles.dropdownContainer}>
            <TextInput style={styles.dropdownItem} placeholder="년도" />
            <TextInput style={styles.dropdownItem} placeholder="월" />
            <TextInput style={styles.dropdownItem} placeholder="일" />
          </View>
        </ScrollView>

        {/* 수정하기 버튼 */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("IfmScreen")} // IfmScreen으로 이동
          >
            <Text style={styles.buttonText}>수정하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpmodify;
