import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Contact } from './types/interfaces'
const { height } = Dimensions.get('window')

const ContactSheet : React.FC<Contact> = ({ name, secondName, subtitle, bio }) => {
  return (
    <View style={[styles.card, {height: height * 0.8}]}>
      <View style={styles.nameBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.secondName}>{secondName}</Text>
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.about}>About Me</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  )
}

export default ContactSheet

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20
  },

  nameBox: {
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 15,
    alignSelf: 'center',
    paddingBottom: 20,
    color: 'grey'
  },

  about: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 5
  },
  bio: {
    color: 'grey'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    textAlign: 'right',
    paddingRight: 1
  },

  secondName: {
    fontSize: 20,
    paddingLeft: 5,
    flex: 1
  }
})