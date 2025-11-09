import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "@/styles/_join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HEROLOGOGREEN } from "@/constants";
import { useRouter } from 'expo-router';
const router = useRouter();

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Header Section */}
          <View style={styles.iconsection}>
            <Ionicons name="arrow-back" size={25} onPress={() => router.push('/')} />
               <Image source={HEROLOGOGREEN} />
          </View>

          {/* Title Section */}
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Create Your</Text>
            <Text style={styles.titleText}>Account</Text>
            <Text style={styles.subText}>
              Enter your details below to create a new account.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Full Name</Text>
              <TextInput placeholder="Enter your full name" style={styles.formControl} />
            </View>

            <View>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput keyboardType="email-address" placeholder="Enter your email" style={styles.formControl} />
            </View>

            <View>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput placeholder="Enter your password" secureTextEntry style={styles.passwordControl} />
                <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
              </View>
            </View>

            <View>
              <Text style={styles.formLabel}>Confirm Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput placeholder="Re-enter your password" secureTextEntry style={styles.passwordControl} />
                <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
              </View>
            </View>
          </View>

          {/* Primary Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>

          {/* Social Buttons */}
          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Fixed Bottom Section */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account?</Text>
          <Text style={styles.signupSubTitleText}> Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
