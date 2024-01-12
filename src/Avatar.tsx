import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Avatar = () => {
  return (
    <View style={styles.avatars}>
        <Text>Caroursel</Text>
    </View>
  )
}

export default Avatar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatars: {
      flex: 1
    }
  });
  