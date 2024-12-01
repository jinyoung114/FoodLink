import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "../Style/MyPostWrite.style";
import NavigateBefore from "../components/NavigateBefore"; // NavigateBefore 컴포넌트
import Ionicons from "react-native-vector-icons/Ionicons";

const MyPostWrite = ({ navigation }) => {
  const [images, setImages] = useState(Array(5).fill(null)); // 사진 상태
  const [selectedCategories, setSelectedCategories] = useState([]); // 선택된 카테고리
  const [selectedItem, setSelectedItem] = useState("---"); // 선택된 식자재
  const [year, setYear] = useState(""); // 년 입력
  const [month, setMonth] = useState(""); // 월 입력
  const [day, setDay] = useState(""); // 일 입력

  // 이미지 추가 핸들러
  const handleAddImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("권한 필요", "사진 라이브러리 접근 권한이 필요합니다.");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!pickerResult.cancelled) {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const emptyIndex = newImages.indexOf(null);
        if (emptyIndex !== -1) {
          newImages[emptyIndex] = pickerResult.uri;
        } else {
          Alert.alert("슬롯 초과", "더 이상 이미지를 추가할 수 없습니다.");
        }
        return newImages;
      });
    }
  };

  const removeCategory = (category) => {
    Alert.alert(
      "카테고리 제거",
      `${category}을(를) 제거하시겠습니까?`,
      [
        { text: "취소", style: "cancel" },
        {
          text: "확인",
          onPress: () =>
            setSelectedCategories((prev) =>
              prev.filter((item) => item !== category)
            ),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <NavigateBefore onPress={() => navigation.goBack()} />
          <Text style={styles.title}>게시물 추가하기</Text>
          <View style={styles.emptySpace} />
        </View>

        {/* 작성자 정보 */}
        <View style={styles.authorSection}>
          <Image
            source={require("../assets/avatar.png")} // Avatar 이미지
            style={styles.authorImage}
          />
          <View style={styles.authorTextContainer}>
            <Text style={styles.authorName}>동길님</Text>
            <Text style={styles.authorDescription}>
              등록하시는 식자재는 {selectedItem}입니다.
            </Text>
          </View>
        </View>

        {/* 이미지 추가 섹션 */}
        <View style={styles.imageSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.foodImagesContainer}
          >
            <TouchableOpacity style={styles.addImageBox} onPress={handleAddImage}>
              <Text style={styles.addImageText}>+</Text>
            </TouchableOpacity>
            {images.map((uri, index) => (
              <View
                key={index}
                style={[styles.foodImagePlaceholder,
                    !uri && { backgroundColor: "#F2F3F6" }]}
              >
                {uri && <Image source={{ uri }} style={styles.foodImage} />}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* 제목 섹션 */}
        <View style={styles.inputSection}>
          <Text style={styles.labelText}>제목을 작성해주세요.</Text>
          <TextInput style={styles.inputBox} placeholder="제목을 입력하세요" />
        </View>

        {/* 내용 섹션 */}
        <View style={styles.inputSection}>
          <Text style={styles.labelText}>소개글을 작성해주세요.</Text>
          <TextInput
            style={styles.textArea}
            placeholder="허위 식자재와 사기 등 위법행위에 대한 작성은 Food Link를 이용 제재 당할 수 있습니다."
            multiline
          />
        </View>

        {/* 유통기한 섹션 */}
        <View style={styles.inputSection}>
          <View style={styles.expirationDateContainer}>
            <Text style={styles.labelText}>유통기한을 선택해주세요.</Text>
            <View style={styles.dateInputs}>
              <TextInput
                style={styles.dateInput}
                placeholder="년"
                keyboardType="numeric"
                value={year}
                onChangeText={setYear}
                maxLength={4}
              />
              <TextInput
                style={styles.dateInput}
                placeholder="월"
                keyboardType="numeric"
                value={month}
                onChangeText={setMonth}
                maxLength={2}
              />
              <TextInput
                style={styles.dateInput}
                placeholder="일"
                keyboardType="numeric"
                value={day}
                onChangeText={setDay}
                maxLength={2}
              />
            </View>
          </View>
        </View>

        {/* 카테고리 섹션 */}
        <View style={styles.inputSection}>
          <Text style={styles.labelText}>카테고리를 선택해주세요.</Text>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryIcon}
              onPress={() =>
                navigation.navigate("CategoryScreen", {
                  setSelectedItems: setSelectedCategories,
                })
              }
            >
              <Ionicons name="grid-outline" size={24} color="green" />
            </TouchableOpacity>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.selectedCategoriesContainer}
            >
              {selectedCategories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.selectedItemTouchable}
                  onPress={() => removeCategory(category)}
                >
                  <Text style={styles.selectedItem}>{category}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* 추가하기 버튼 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>추가하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyPostWrite;
