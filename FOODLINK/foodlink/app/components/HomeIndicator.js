// app/components/HomeIndicator.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const HomeIndicator = () => {
  return <View style={styles.indicator} />;
};

const styles = StyleSheet.create({
  indicator: {
    width: '100%',
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default HomeIndicator;
