import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Registration from './src/components/Registration';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View >
      <Header/>
      <Registration/>
      {/* <NavigationContainer>

<Stack.Navigator>
  

    <Stack.Screen name="registration" component={Registration}/>

</Stack.Navigator>
</NavigationContainer> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  
  },
});
