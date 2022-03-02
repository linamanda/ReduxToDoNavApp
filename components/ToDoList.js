import React, { Component } from "react";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// ToDoList Component
// Given an array, display as unordered list
export default class ToDoList extends Component {
  state = {
    isChecked: [], // Array for each item in todoList corresponding to checkbox checked value
  };

  render() {
    const { navigation, todoList } = this.props;

    this.state.isChecked.push(false);

    return (
      <View style={styles.list}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => {
            let itemIndex = todoList.indexOf(item);
            this.state.isChecked.push(false);

            return (
              <View style={styles.listItem}>
                <Checkbox
                  value={this.state.isChecked[itemIndex]}
                  onValueChange={(value) => {
                    let newIsChecked = this.state.isChecked;
                    newIsChecked[itemIndex] = value;
                    this.setState({ isChecked: newIsChecked }, () => {});
                  }}
                />

                <TouchableOpacity
                  underlayColor={"blue"}
                  onPress={() => {
                    navigation.navigate("toDoDetails", {
                      toDoTitle: item[0],
                      toDoStatus: this.state.isChecked[itemIndex],
                      toDoBody: item[1],
                    });
                  }}
                >
                  <Text
                    style={[
                      styles.listItemText,
                      this.state.isChecked[itemIndex] &&
                        styles.listItemTextDone,
                    ]}
                  >
                    {item[0]}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginBottom: "4%",
    width: "90%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: "4%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "2%",
    marginBottom: "2%",
  },
  listItemText: {
    fontSize: 20,
    marginLeft: "4%",
    color: "black",
    width: "100%",
  },
  listItemTextDone: {
    color: "gray",
    textDecorationLine: "line-through",
  },
});
