import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ContactSheet from './ContactSheet'
import { Contact } from './types/interfaces'

const ContactsList = ({ data, y, setX }: {data: Contact[], y : number, setX : Function}) => {
  const scrollRef = useRef()

  useEffect(() => {
    const scroll = () => {
      scrollRef.current.scrollTo({
        x: 0,
        y: y
      })
    }
    scroll()
  }, [y])

  const scrollVert = () => {
    setX()
  }

  return (
    <View style={styles.scrollBox}>
      <ScrollView style={styles.scroll} ref={scrollRef} onScroll={() => scrollVert()}>
        { data.map(( { id, name, secondName, subtitle, bio } : Contact ) => (
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
    flex: 7
  }
});
