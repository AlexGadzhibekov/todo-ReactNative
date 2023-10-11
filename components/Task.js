import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Task = ({ taskText, index, setTasks, tasks }) => {
  const deleteTask = () => {
    const newTasks = [...tasks];

    const filterTasks = newTasks.filter((el, curIndex) => {
      return curIndex !== index;
    });

    setTasks(filterTasks);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={deleteTask}>
      <View style={styles.left}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{taskText}</Text>
      </View>
      <View style={styles.right}></View>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
  },
  right: {
    width: 15,
    height: 15,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 50,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    fontSize: 14,
  },
});
