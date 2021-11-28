
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Index from './Index';
import CrearTurnos from './CrearTurno';
import Turnos from './Turnos';


function HomeScreen({ navigation }) {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
    />
    </View>
);
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Turnos" component={Turnos} />        
        <Stack.Screen name="CrearTurnos" component={CrearTurnos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;