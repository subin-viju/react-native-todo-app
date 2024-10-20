import { Fragment, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";

export default function Dashboard() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit() {
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo("");
  }

  function handleDelete(idx: number) {
    let updated = todos.filter((_, index) => index !== idx);
    setTodos(updated);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{ width: "100%", height: 292, backgroundColor: "#50C2C9" }}
        >
          <View style={{ position: "absolute", top: 0, left: 0 }}>
            <Image source={require("../../assets/images/shape2.png")} />
          </View>
          <View
            style={{
              alignItems: "center",
              gap: 15,
              justifyContent: "flex-end",
              height: "100%",
            }}
          >
            <Image source={require("../../assets/images/profile.png")} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Welcome Subin!
            </Text>
          </View>
        </View>
        <View style={{ width: "100%", padding: 25 }}>
          <Text
            style={{
              alignSelf: "flex-end",
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            Good Afternoon
          </Text>
          <Image
            style={{ alignSelf: "center" }}
            source={require("../../assets/images/clock.png")}
          />
        </View>
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 35 }}>
            Task list
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              height: 309,
              borderRadius: 12,
              padding: 25,
            }}
          >
            <TextInput
              style={{ paddingVertical: 10, paddingLeft: 5, marginBottom: 40 }}
              placeholder="Daily Task.."
              value={newTodo}
              onChangeText={(text) => setNewTodo(text)}
              onSubmitEditing={handleSubmit}
            />
            <Pressable
              style={{ position: "absolute", top: 32, right: 25 }}
              onPress={handleSubmit}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={require("../../assets/images/plus.png")}
              />
            </Pressable>
            <View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {todos.map((todo, idx) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      marginBottom: 10,
                    }}
                    key={idx}
                  >
                    <Text>{todo}</Text>
                    <Pressable onPress={() => handleDelete(idx)}>
                      <Text>Delete</Text>
                    </Pressable>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
