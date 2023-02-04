import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={props.onTextInput}
      />
      <Button title="Add Goal" onPress={props.onAdd} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
