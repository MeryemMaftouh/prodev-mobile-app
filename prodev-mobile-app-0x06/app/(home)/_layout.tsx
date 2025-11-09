// app/(home)/_layout.tsx
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign, Feather, EvilIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function HomeRootLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#34967C",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: "Saved",
            tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />,
          }}
        />
        <Tabs.Screen
          name="inbox"
          options={{
            title: "Inbox",
            tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
