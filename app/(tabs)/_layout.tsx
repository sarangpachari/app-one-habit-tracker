import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#44821579" },
        headerShadowVisible: false,
        tabBarActiveTintColor: "#448215d0",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: {
          backgroundColor: "#4482150f",
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today's Habits",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="streaks"
        options={{
          title: "Streaks",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-habit"
        options={{
          title: "Add Habit",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="pluscircle" size={size} color={color} />;
            } else {
              return <AntDesign name="pluscircleo" size={size} color={color} />;
            }
          },
        }}
      />
    </Tabs>
  );
}
