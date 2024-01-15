
import { StyleSheet, SafeAreaView} from 'react-native';
import { useReducer, useRef, useState } from 'react';
import ContactsList from './src/ContactsList';
import contactsJson from './assets/contact'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import AvatarList from './src/AvatarList';
import reducer from './src/store/reducer';
import { SelectedContext, SelectedProvider } from './src/contexts/SelectedContext';

const Contact = () => {
  const [contacts, setContacts] = useState(contactsJson)
  // const [state, dispatch] = useReducer(reducer, { x: 0, y: 0, index: 0})
  const hRef = useRef()
  const vRef = useRef()

  return (
    <SelectedProvider>
      <SafeAreaView style={styles.container}>
        <AvatarList hRef={hRef}/>
        <ContactsList vRef={vRef} data={contacts}/>
      </SafeAreaView>
    </SelectedProvider>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contact} />
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
