import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function WorkoutCard({
  image,
  title,
  duration,
  calories,
  isFavorite,
  onToggleFavorite,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
    >

      {/* Workout Image */}

      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Favourite Button */}

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onToggleFavorite}
          activeOpacity={0.8}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Workout Information */}

      <View style={styles.infoContainer}>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.details}>
          {duration} • {calories}
        </Text>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 18,
    overflow: "hidden",

    elevation: 3,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 190,
  },

  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,

    width: 42,
    height: 42,
    borderRadius: 21,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",

    elevation: 3,
  },

  favoriteIcon: {
    fontSize: 25,
    color: "#FF4F70",
  },

  infoContainer: {
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
  },

  details: {
    fontSize: 14,
    color: "#777777",
    marginTop: 6,
  },
});