import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 70,
          backgroundColor: "#F0F4F3",
        }}
      >
        <View style={{ position: "absolute", top: 0, left: 0 }}>
          <Image source={require("../assets/images/shape.png")}></Image>
        </View>
        <View></View>
        <View style={{ alignItems: "center", gap: 15 }}>
          <Image
            style={{ marginBottom: 50 }}
            source={require("../assets/images/getstarted.png")}
          ></Image>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>
            Gets things with TODOs
          </Text>
          <Text
            style={{
              fontSize: 13,
              textAlign: "center",
              paddingHorizontal: 115,
              lineHeight: 20,
              letterSpacing: 0.3,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
            Consequat urna quam felis interdum quisque. Malesuada adipiscing
            tristique ut eget sed.
          </Text>
        </View>
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
          <Pressable
            style={{
              backgroundColor: "#50c2c9",
              padding: 15,
              borderRadius: 8,
            }}
            onPress={() => router.push("/signup")}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Get Started
            </Text>
          </Pressable>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
