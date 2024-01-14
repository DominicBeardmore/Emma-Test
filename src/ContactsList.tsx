import React, { Ref, useEffect} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ContactSheet from './ContactSheet'
import { Contact, State } from './types/interfaces'

const ContactsList = ({ data, state, dispatch, vRef, }: {
  data: Contact[],
  state: State,
  dispatch : Function,
  vRef: Ref
}) => {

  useEffect(() => {
    const scroll = () => {
      vRef?.current?.scrollTo({ y: state.y})
    }
    scroll()
  }, [state.index])



  const scrollHorz = (event: { nativeEvent: { contentOffset: { y: number } } }) => {
    // if (event.nativeEvent.contentOffset.y % 500 == 0) {
      const index = (event.nativeEvent.contentOffset.y / 500)
      dispatch({
        type: 'select-item',
        payload: { index: Math.floor(index)  }
      })
    // }
  }

  return (
    <View style={styles.scrollBox}>
      <ScrollView
        style={styles.scroll} 
        ref={vRef} 
        onScroll={scrollHorz}
        decelerationRate="fast"
        snapToInterval={500}
        scrollEventThrottle={160}
        overScrollMode={'never'}
      >
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
    backgroundColor: '#fff'
  },
  scrollBox: {
    flex: 7,
    justifyContent: 'flex-start'
  }
});
