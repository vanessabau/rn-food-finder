import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({
  term,
  onTermChange,
  onTermSubmit,
}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        name="search"
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={(newTerm) =>
          onTermChange(newTerm)
        }
        //Two ways of calling cb functions passing the function directly(below) or calling it fully(above)
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#d3d3d3",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
