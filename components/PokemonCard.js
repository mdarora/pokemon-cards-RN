import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

export default function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text>PokemonCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        padding: 16,
        margin: 16,
        borderWidth:2,
        borderColor: "black",
        borderRadius: 16,
        backgroundColor: "white",
        ...Platform.select({
            ios: {
                shadowColor: "#333333",
                shadowOffset: {width: 2, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5,
            }
        })
    }
})