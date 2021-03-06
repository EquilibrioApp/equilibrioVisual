import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ProtectedScreen} from '../screens/ProtectedScreen';
import {AuthContext} from '../context/AuthContext';
import {LoadingScreen} from '../screens/LoadingScreen';
import {UserTypeScreen} from '../screens/UserTypeScreen';
import {PatientRegisterScreen} from '../screens/PatientRegisterScreen';
import {BottomTab} from './BottomTab';
import {PotencialUsuarioNavigator} from './PotencialUsuarioNavigator';
import {PatientProfileScreen} from '../screens/PatientProfileScreen';
import {PatientNavigator} from './PatientNavigator';
import {ExcerciseMainScreen} from '../screens/ExcerciseMainScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/Register';
import { BottomDoctorTab } from './BottomDoctorBar';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  const {status} = useContext(AuthContext);

  // const idUsuario: string = 

  if (status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          {/* Fragmento para poder retornar alguna de las dos pantallas. 
                En una expresion ternaria solo se devueleve un objeto JSX*/}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="PatientRegisterScreen"
            component={PatientRegisterScreen}
          />
          <Stack.Screen
            name="PotencialUsuarioNavigator"
            component={PotencialUsuarioNavigator}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="PatientsNavigator" component={PatientNavigator} />
          <Stack.Screen name="PatientProfileScreen" component={PatientProfileScreen}/>
          <Stack.Screen name="DoctorsNavigation" component={BottomDoctorTab} />
          <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
        </>
        
      )}
    </Stack.Navigator>
  );
};

// TODO Barra de busqueda
// TODO Conexion con servicio de nest js