import { Link, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

export default function SignUp() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <View style={{ position: "absolute", top: 0, left: 0 }}>
          <Image source={require("../../assets/images/shape.png")}></Image>
        </View>
        <View style={{ marginBottom: 180 }}></View>
        <View style={{ alignItems: "center", gap: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>
            Welcome to Onboard!
          </Text>
          <Text
            style={{
              fontSize: 13,
              textAlign: "center",
              paddingHorizontal: 115,
              lineHeight: 20,
              letterSpacing: 0.3,
              marginBottom: 60,
            }}
          >
            Let’s help to meet up your tasks.
          </Text>
          <View style={{ width: "100%", paddingHorizontal: 25, gap: 30 }}>
            <TextInput style={styles.input} placeholder="Enter your Fullname" />
            <TextInput style={styles.input} placeholder="Enter your Email" />
            <TextInput style={styles.input} placeholder="Enter Password" />
            <TextInput style={styles.input} placeholder="Confirm Password" />
          </View>
        </View>
        <View style={{ alignItems: "center", width: "100%", padding: 25 }}>
          <Pressable
            style={styles.submitBtn}
            onPress={() => router.push("/signin")}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Register
            </Text>
          </Pressable>
          <Text style={{ fontSize: 16 }}>
            Already have an account ?{" "}
            <Link style={{ color: "#50C2C9" }} href={"/signin"}>
              Sign In
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
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 13,
    borderRadius: 50,
    width:'100%'
  },
  submitBtn: {
    backgroundColor: "#50c2c9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
  },
});
