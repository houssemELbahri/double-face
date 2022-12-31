import React  from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';


import { MainScreen } from './src/screens/mainScreen';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'black',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        hidden
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MainScreen />
    </SafeAreaView>
  );
};


export default App;
