import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

const App = () => {
  let nom = "ASHUZA";
  var prenom = "Pascal";
  const postnom = "Kasumbe";

  const [nombre, setNombre] = useState(100);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>yekola {nombre} </Text>
        <Text style={styles.title}> {nom} </Text>
        <Text style={styles.title}>kala mingi te {prenom} </Text>
        <Button title="Valider" onPress={() => setNombre(   nombre + 5000 )}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0FF",
    padding: 20,
    // margin: 10,
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 20,
    textTransform: "uppercase",
    backgroundColor: "black",
  },

  box: {
    backgroundColor: "#F50A7B",
    width: "auto",
    height: 300,
    padding: 20,
    borderRadius: 50,
    marginTop: 30,

    // margin : 70,
    // padding :40,
  },

  main: {
    color: "red",
  },
});

export default App;