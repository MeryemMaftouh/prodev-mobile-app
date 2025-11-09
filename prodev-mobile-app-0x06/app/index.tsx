import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Background Image */}
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>

          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your favorite place here</Text>
          </View>

          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              The best prices for over 2 million properties worldwide
            </Text>
          </View>

          {/* Buttons */}
          <View style={{ position: "absolute", bottom: 50, width: "100%" }}>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => router.push("/join")}
              >
                <Text style={styles.buttonPrimaryText}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => router.push("/signin")}
              >
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            {/* ✅ Continue to Home */}
            <View style={styles.buttonGroupSubText}>
              <TouchableOpacity onPress={() => router.push("/(home)")}>
                <Text style={styles.titleSubText}>Continue to home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
