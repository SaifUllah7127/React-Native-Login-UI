import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import * as React from "react";
import {
  Provider as PaperProvider,
  TextInput,
  Button,
} from "react-native-paper";
import { name as appName } from "./app.json";

export default function App() {
  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>SAIFULLAH app!</Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      >
        {console.log(text)}
      </TextInput>
      <TextInput
        label="Password"
        value={pass}
        onChangeText={(pass) => setPass(pass)}
      />
      <Button mode="contained" onPress={() => console.log("dab gaya")}>
        Submit
      </Button>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
});
