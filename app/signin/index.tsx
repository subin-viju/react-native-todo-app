import { Link, router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

export default function SignIn() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <View style={{ position: "absolute", top: 0, left: 0 }}>
          <Image source={require("../../assets/images/shape.png")}></Image>
        </View>
        <View style={{ marginBottom: 125 }}></View>
        <View style={{ alignItems: "center", width: "100%", gap: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Welcome Back!</Text>
          <Image
            style={{ marginBottom: 55 }}
            source={require("../../assets/images/login-child.png")}
          />
          <View style={{ width: "100%", paddingHorizontal: 25, gap: 30 }}>
            <TextInput style={styles.input} placeholder="Enter your Email" />
            <TextInput
              style={{ ...styles.input, marginBottom: 20 }}
              placeholder="Enter Password"
            />
            <Text
              style={{ textAlign: "center", fontSize: 13, color: "#50C2C9" }}
            >
              Forget password ?
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", width: "100%", padding: 25 }}>
          <Pressable
            onPress={() => router.push("/dashboard")}
            style={styles.submitBtn}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Login
            </Text>
          </Pressable>
          <Text style={{ fontSize: 16 }}>
            Don’t have an account ?{" "}
            <Link style={{ color: "#50C2C9" }} href={"/signup"}>
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
    backgroundColor: "#F0F4F3",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 13,
    borderRadius: 50,
  },
  submitBtn: {
    backgroundColor: "#50c2c9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
  },
});
