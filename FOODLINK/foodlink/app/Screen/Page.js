import React from "react";
import { SafeAreaView } from "react-native";
import MyPage from "../Screen/MyPage";
import { styles } from "../Style/Page.style";

const Page = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MyPage />
    </SafeAreaView>
  );
};

export default Page;
