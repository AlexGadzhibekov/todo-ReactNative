import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const AddTask = ({ setTasks, tasks }) => {
  const [textInput, setTextInput] = useState();

  const addTask = () => {
    if (textInput && textInput.trim() !== "") {
      const newTasks = [...tasks, textInput];

      setTasks(newTasks);
      setTextInput("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={[styles.textInput, !textInput && styles.centredText]}
        placeholderTextColor="#c0c0c0"
        placeholder=" Write a task"
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
      ></TextInput>
      <TouchableOpacity onPress={addTask}>
        <View style={styles.addBtn}>
          <Icon name="plus" size={32} />
        </View>
      </TouchableOpacity>
      {/* <Button title='+' onPress={() => { }} style={styles.btn}/> */}
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  addTaskContainer: {
    paddingTop: 10,
    backgroundColor: "#E8EAED",
    flexDirection: "row",
    gap: 20,
    position: "absolute",
    bottom: 36,
  },
  textInput: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 60,
    color: "black",
    width: "75%",
  },
  centredText: {
    textAlign: "center",
  },
  addBtn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 52,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
