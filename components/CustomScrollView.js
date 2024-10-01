import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const CustomScrollView = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {Array.from({ length: 30 }, (_, index) => (
        <Text key={index} style={styles.text}>Scroll item {index + 1}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default CustomScrollView;
