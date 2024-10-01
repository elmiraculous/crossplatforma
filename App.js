import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import CustomScrollView from './components/CustomScrollView';
import StyledView from './components/StyledView';
import ImageDisplay from './components/ImageDisplay';
import StyledText from './components/StyledText';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StyledView />
      <CustomScrollView />
       <ImageDisplay />
      <StyledText /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
