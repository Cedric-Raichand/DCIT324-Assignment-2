import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function WorkoutDetailsScreen({ route }) {
  const { workout } = route.params;

  const [completed, setCompleted] = useState(false);

  const handleWorkout = () => {
    setCompleted((previousState) => !previousState);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Workout Image */}

      <Image
        source={workout.image}
        style={styles.workoutImage}
        resizeMode="cover"
      />

      {/* Workout Details */}

      <View style={styles.content}>

        <Text style={styles.title}>
          {workout.title}
        </Text>

        {/* Workout Stats */}

        <View style={styles.statsContainer}>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>
              {workout.duration}
            </Text>

            <Text style={styles.statLabel}>
              Duration
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>
              {workout.calories}
            </Text>

            <Text style={styles.statLabel}>
              Calories
            </Text>
          </View>

        </View>

        {/* Description */}

        <Text style={styles.sectionTitle}>
          About this workout
        </Text>

        <Text style={styles.description}>
          This workout is designed to improve your fitness,
          strength, and overall health. Follow the exercises
          at your own pace and stay consistent with your
          training.
        </Text>

        {/* Start Workout Button */}

        <TouchableOpacity
          style={[
            styles.startButton,
            completed && styles.completedButton,
          ]}
          onPress={handleWorkout}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {completed ? "Completed" : "Start Workout"}
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F7",
  },

  workoutImage: {
    width: "100%",
    height: 300,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 20,
  },

  statsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
  },

  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF4F70",
  },

  statLabel: {
    fontSize: 13,
    color: "#777777",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: "#666666",
    marginBottom: 30,
  },

  startButton: {
    height: 55,
    borderRadius: 16,
    backgroundColor: "#FF4F70",
    alignItems: "center",
    justifyContent: "center",
  },

  completedButton: {
    backgroundColor: "#333333",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});