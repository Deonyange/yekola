import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [participants, setParticipants] = useState([]);

  // Ajouter un participant
  const addParticipant = () => {
    if (name.trim() === "") {
      Alert.alert("Erreur", "Le nom ne peut pas être vide !");
      return;
    }

    const newParticipant = { id: Date.now().toString(), name, present: false };
    setParticipants([...participants, newParticipant]);
    setName("");
  };

  // Marquer comme présent ou absent
  const togglePresence = (id) => {
    const updatedParticipants = participants.map((participant) =>
      participant.id === id
        ? { ...participant, present: !participant.present }
        : participant
    );
    setParticipants(updatedParticipants);
  };

  // Rendu de chaque participant
  const renderParticipant = ({ item }) => (
    <View style={styles.participant}>
      <Text style={styles.participantName}>{item.name}</Text>
      <TouchableOpacity
        style={[
          styles.presenceButton,
          { backgroundColor: item.present ? "#4CAF50" : "#F44336" },
        ]}
        onPress={() => togglePresence(item.id)}
      >
        <Text style={styles.presenceButtonText}>
          {item.present ? "Présent" : "Absent"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion de Présence</Text>

      {/* Ajouter un participant */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrez le nom du participant"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={styles.addButton} onPress={addParticipant}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des participants */}
      <FlatList
        data={participants}
        renderItem={renderParticipant}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    marginTop: 10,
  },
  participant: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  participantName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  presenceButton: {
    padding: 10,
    borderRadius: 5,
  },
  presenceButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;

