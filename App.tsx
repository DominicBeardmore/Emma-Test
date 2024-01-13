
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import { useState } from 'react';
import ContactsList from './src/ContactsList';
import contactsJson from './assets/contact'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import AvatarList from './src/AvatarList';
import useVerticalScroll from './src/hooks/useVerticalScroll';
import useHorizontalScroll from './src/hooks/useHorizontalScroll';

const Contact = () => {
  const [contacts, setContacts] = useState(contactsJson)
  const { y, setY } = useVerticalScroll()
  const { x, setX } = useHorizontalScroll()
  
  return (
    <SafeAreaView style={styles.container}>
      <AvatarList setY={setY} x={x}/>
      { contacts.length > 0 ? <ContactsList y={y} setX={setX} data={contacts}/> : <Text>Loading</Text>}
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
