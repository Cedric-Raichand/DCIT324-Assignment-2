import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import WorkoutCard from "../components/WorkoutCard";

const workouts = [
  {
    id: "1",
    title: "Full Body Workout",
    duration: "30 min",
    calories: "250 Kcal",
    image: require("../assets/images/Full-Body-Workout.webp"),
  },
  {
    id: "2",
    title: "Morning Yoga",
    duration: "25 min",
    calories: "180 Kcal",
    image: require("../assets/images/Morning-Yoga.webp"),
  },
  {
    id: "3",
    title: "Cardio Training",
    duration: "35 min",
    calories: "320 Kcal",
    image: require("../assets/images/Cardio-Training.webp"),
  },
  {
    id: "4",
    title: "Strength Training",
    duration: "40 min",
    calories: "400 Kcal",
    image: require("../assets/images/Strength-Training.webp"),
  },
  {
    id: "5",
    title: "Cycling Workout",
    duration: "30 min",
    calories: "280 Kcal",
    image: require("../assets/images/Cycling-Workout.webp"),
  },
  {
    id: "6",
    title: "Boxing Workout",
    duration: "25 min",
    calories: "300 Kcal",
    image: require("../assets/images/Boxing-Workout.jpg"),
  },
];

export default function WorkoutListScreen({ navigation }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((previousFavorites) => ({
      ...previousFavorites,
      [id]: !previousFavorites[id],
    }));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >

      {/* Page Header */}

      <View style={styles.header}>
        <Text style={styles.heading}>
          Workouts
        </Text>

        <Text style={styles.subtitle}>
          Find the perfect workout for you
        </Text>
      </View>

      {/* Workout List */}

      <View style={styles.workoutList}>
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            image={workout.image}
            title={workout.title}
            duration={workout.duration}
            calories={workout.calories}
            isFavorite={!!favorites[workout.id]}
            onToggleFavorite={() =>
              toggleFavorite(workout.id)
            }
            onPress={() =>
              navigation.navigate("WorkoutDetails", {
                workout: workout,
              })
            }
          />
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F7",
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  header: {
    marginBottom: 20,
  },

  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111111",
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
  },

  workoutList: {
    width: "100%",
  },
});