import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import ContactSheet from './ContactSheet'
import { Contact } from '../types/interfaces'
import { SyncedScrollView } from './SyncedScrollView'
const { height } = Dimensions.get('window')

const ContactsList = ({ contacts }: {
  contacts: Contact[]
}) => {

  return (   
    <View style={styles.scrollBox}>
      <SyncedScrollView
        id={0}
        style={styles.scroll}
        scrollEventThrottle={16}
        snapToInterval={height * 0.8}
        showsVerticalScrollIndicator={false}
      >
        { contacts.map(( { id, name, secondName, subtitle, bio } : Contact ) => (
          <ContactSheet
            key={id}
            name={name}
            secondName={secondName}
            subtitle={subtitle}
            bio={bio}
            id={id} 
            image={''}          
          />)) }
      </SyncedScrollView> 
    </View>
  )
}

export default ContactsList

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff'
  },
  scrollBox: {
    flex: 7,
    justifyContent: 'flex-start'
  }
});
