import React from 'react';
import { Text, StyleSheet } from 'react-native';

const StyledText = () => {
  return (
    <Text style={styles.styledText}>
      This is a styled Text component with a larger font and green color.
    </Text>
  );
};

const styles = StyleSheet.create({
  styledText: {
    fontSize: 24,
    color: 'green',
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default StyledText;

