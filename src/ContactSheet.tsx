import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Contact } from './types/interfaces'


const ContactSheet : React.FC<Contact> = ({ name, secondName, subtitle, bio }) => {
  return (
    <View style={styles.card}>
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
    height: 500,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderBottomWidth: 1,
  },

  nameBox: {
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 15,
    alignSelf: 'center'
  },

  about: {
    fontWeight: 'bold',
    fontSize: 15
  },
  bio: {},
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    textAlign: 'right',
    paddingRight: 5
  },

  secondName: {
    fontSize: 20,
    paddingLeft: 5,
    flex: 1
  }
})