import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import CountryPage from '../pages/CountryPage';
import CountryGaeryPage from '../pages/CountryGaeryPage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Главная' }} />
        <Stack.Screen name="Details" component={CountryPage} options={{ title: 'Детали' }} />
        <Stack.Screen name="Gallery" component={CountryGaeryPage} options={{ title: 'Галерея' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
