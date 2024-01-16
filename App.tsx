
import { StyleSheet, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import ContactsList from './src/ContactsList';
import contactsJson from './assets/contact'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import AvatarList from './src/AvatarList';
import { useSyncScrollViewContext, SyncScrollViewState } from './src/contexts/SyncScrollViewContext';

const Contact = () => {
  const [contacts, _] = useState(contactsJson)

  const ScrollViewProviderContext = useSyncScrollViewContext()
  return (
    <ScrollViewProviderContext.Provider value={SyncScrollViewState}>
      <SafeAreaView style={styles.container}>
        <AvatarList contacts={contacts}/>
        <ContactsList contacts={contacts}/>
      </SafeAreaView>
    </ScrollViewProviderContext.Provider>
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
