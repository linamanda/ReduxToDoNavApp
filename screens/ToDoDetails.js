import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default class ToDoDetails extends Component {
  render() {
    const { navigation, route } = this.props;
    let { toDoTitle, toDoStatus, toDoBody } = route.params;

    navigation.setOptions({
      //or setOptions?
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.setParams({ toDoStatus: !toDoStatus });
          }}
        >
          <Ionicons
            name={toDoStatus ? "checkmark-circle" : "checkmark-circle-outline"}
            size={30}
            color={"green"}
            style={styles.iconContainer}
          />
        </TouchableOpacity>
      ),
    });
    return (
      <View style={styles.contentContainer}>
        <Text style={[styles.title, styles.text]}>{toDoTitle}</Text>
        <Text style={styles.text}>{toDoStatus ? "Complete" : "Pending"}</Text>
        <Text style={styles.text}>{toDoBody}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    height: "100%",
    padding: "7%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    marginBottom: "5%",
  },
});
