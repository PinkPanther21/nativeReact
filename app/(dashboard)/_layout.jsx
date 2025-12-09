import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.iconFocusedColor,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? theme.iconFocusedColor : theme.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="book-outline"
              size={24}
              color={focused ? theme.iconFocusedColor : theme.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-circle-outline"
              size={24}
              color={focused ? theme.iconFocusedColor : theme.iconColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
