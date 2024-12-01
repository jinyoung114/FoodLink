// app/components/DivWrapper.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const DivWrapper = ({ rectangle, text }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={text || 'Enter text'}
        style={styles.input}
        secureTextEntry={rectangle === 'rectangle-8-2.svg'} // 특정 값에 따라 secureTextEntry 설정
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#2d754e',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
});

export default DivWrapper;
