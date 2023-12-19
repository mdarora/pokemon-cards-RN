import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import React from 'react'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
    const getTypeDetails = (type) => {
        switch (type.toLowerCase()) {
            case "electric":
                return { borderColor: "#FFD700", emoji: "⚡️" };
            case "water":
                return { borderColor: "#6493EA", emoji: "💧" };
            case "fire":
                return { borderColor: "#FF5733", emoji: "🔥" };
            case "grass":
                return { borderColor: "#66CC66", emoji: "🌿" };
            default:
                return { borderColor: "#A0A0A0", emoji: "❓" };
        }
    };
    const {borderColor, emoji} = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <Text style={[styles.name, {color: borderColor}]}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>

            <View>
                <Image style={styles.image} source={image} accessibilityLabel={`${name} pokemon`} />
            </View>

            <View style={styles.typeContainer}>
                <View style={[styles.badge, {borderColor}]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}><Text style={styles.movesTextTitle}>Moves:</Text> {moves.join(", ")}</Text>
            </View>

            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}><Text style={styles.weaknessTextTitle}>Weakness:</Text> {weaknesses.join(", ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        margin: 16,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 16,
        backgroundColor: "white",
        ...Platform.select({
            ios: {
                shadowColor: "#333333",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5,
            }
        })
    },
    cardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        fontSize: 32,
        color: "blue",
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22,
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginVertical: 28
    },
    typeContainer:{
        alignItems: "center",
        marginVertical:16,
    },
    badge:{
        borderWidth:2,
        paddingVertical: 8,
        paddingHorizontal:16,
        borderRadius: 8,
        flexDirection:"row",
        alignItems:"center",
        gap: 4
    },
    typeEmoji:{
        fontSize: 22
    },
    typeText:{
        fontSize: 22,
        fontWeight: "bold"
    },
    movesContainer:{
        marginBottom: 12
    },
    movesTextTitle:{
        fontWeight: "bold"
    },
    movesText:{
        fontSize: 22,
        fontWeight: 600
    },
    weaknessContainer:{
        marginBottom: 4
    },
    weaknessTextTitle:{
        fontWeight: "bold"
    },
    weaknessText:{
        fontSize: 22,
        fontWeight: 600
    }
})