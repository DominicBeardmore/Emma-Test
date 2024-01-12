import React from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native'
import ContactSheet from './ContactSheet'
import { Contact } from './types/interfaces'

const ContactsList = (data : Contact[]) => {
  console.log(data)
  return (
    <View style={styles.scrollBox}>
      <ScrollView style={styles.scroll}>
        { data.contacts.map(( { id, name, secondName, subtitle, bio } : Contact ) => (
          <ContactSheet
            key={id}
            name={name}
            secondName={secondName}
            subtitle={subtitle}
            bio={bio} 
            id={id}      
          />)) }
      </ScrollView> 
    </View>
  )
}

export default ContactsList

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
  },
  scrollBox: {
    flex: 8
  }
});
