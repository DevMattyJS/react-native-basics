import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  //* Add a new goal into a list of goals
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    // View it's like a container element
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* Output the list of course goals */}
        {courseGoals.map((courseGoal) => (
          // Output the list of course items (we wrapped a View element around Text just for a styling reasons for ios)
          <View key={courseGoal} style={styles.goalItem}>
            <Text style={styles.goalText}>{courseGoal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// ############# STYLES ###############

//! There isn't o CSS in React Native -
//! A big difference between CSS and Stylesheet object is that children elements don't inherit a styles from their parent elements !!!
//* We can use inline styles or we can set up a stylesheet objects
//* These stylesheet objects are written in JS, but the property names are inspired by Css
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  //* A key feature to build layouts in a React Native apps is 'flexbox'
  //* every View by default use a flexbox and it is setup to organizing children components in a column
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
