import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import React from 'react'

export default function PokemonCard({name, image, type, hp, moves, weaknesses}) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      <View>
        <Image source={image} accessibilityLabel={`${name} pokemon`} />
      </View>

      <View>
        <Text>{type}</Text>
      </View>

      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      
      <View>
        <Text>Weakness: {weaknesses.join(", ")}</Text>
      </View>
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