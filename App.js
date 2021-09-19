import React from 'react';
import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import Register from './src/pages/Cadastro';

import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
          }}

        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            headerShown: false,
          }}

        />
        <Stack.Screen
          name='Task'
          component={Task}
          options={{
            headerTintColor: ' hsl(250, 8%, 95%)',
            title: 'Tarefas',
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: 'hsl(250, 29%, 16%)',
            }
          }}

        />
        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{
            headerTintColor: ' hsl(250, 8%, 95%)',
            title: 'Nova Tarefa',
            headerStyle: {
              backgroundColor: 'hsl(250, 29%, 16%)',
            }
          }}

        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerTintColor: ' hsl(250, 8%, 95%)',
            headerStyle: {
              backgroundColor: 'hsl(250, 29%, 16%)',
            },
            title: 'Detalhes'
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
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
