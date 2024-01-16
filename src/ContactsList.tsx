import React, { Ref, useContext, useEffect, useState} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ContactSheet from './ContactSheet'
import { Contact, State } from './types/interfaces'
import { SelectedContext, SelectedDispatchContext } from './contexts/SelectedContext'
import { SyncedScrollView } from './components/SyncedScrollView'

const ContactsList = ({ data, vRef}: {
  data: Contact[],
  vRef: Ref,
}) => {

  return (
    <View style={styles.scrollBox}>
      <SyncedScrollView
        id={0}
        style={styles.scroll}
        snapToInterval={500}
        scrollEventThrottle={16}      
        >
        { data.map(( { id, name, secondName, subtitle, bio } : Contact ) => (
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
