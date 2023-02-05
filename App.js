import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  //* Add a new goal into a list of goals
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  //* Delete a goal (pressed) from a list of goals
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      // Delete an item by using a filter method (create a new array without tha deleted item, which was filtered out)
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    // View it's like a container element
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* FlatList component is scrollable, but just the currently visible items are rendered */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          // If we loading our data from API and there is some property, which we can use as a good unique key
          // we can use a keyExtractor prop to extract that key from a data and tell Flatlist to use it
          // If we setting up our own data, it's better to set a 'key' property to our data and Flatlist will automatically use it
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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

  goalsContainer: {
    flex: 5,
  },
});
