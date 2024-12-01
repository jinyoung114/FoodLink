// app/components/ElementAvatars.js
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ElementAvatars = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../assets/avatar.png')} // 아바타 이미지 파일 경로
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
});

export default ElementAvatars;
