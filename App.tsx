
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import { useState } from 'react';
import ContactsList from './src/ContactsList';
import contactsJson from './assets/contact'
import Avatar from './src/Avatar';

export default function App() {
  const [contacts, setContacts] = useState(contactsJson)
  return (
      <SafeAreaView style={styles.container}>
        <Avatar/>
        { contacts.length > 0 ? <ContactsList contacts={contacts} /> : <Text>Loading</Text>}
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
