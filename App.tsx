
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import { useState } from 'react';
import ContactsList from './src/ContactsList';
import contactsJson from './assets/contact'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import AvatarList from './src/AvatarList';

const Contact = () => {
  const [contacts, setContacts] = useState(contactsJson)
  return (
    <SafeAreaView style={styles.container}>
      <AvatarList/>
      { contacts.length > 0 ? <ContactsList contacts={contacts} /> : <Text>Loading</Text>}
    </SafeAreaView>
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
