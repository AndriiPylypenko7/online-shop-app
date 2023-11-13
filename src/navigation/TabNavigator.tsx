import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/screens/HomeScreen";
import CatalogScreen from "../components/screens/CatalogScreen";
import AccountScreen from "../components/screens/AccountScreen";
import { Platform } from "react-native";
import { IconByKey } from "../components/shared/Icon/Icon";
import TabButton from "./components/TabButton";

const Tab = createBottomTabNavigator();

const navigationTabs: {
  title: string;
  screenComponent: () => JSX.Element;
  icon: IconByKey;
}[] = [
  {
    title: "Catalog",
    screenComponent: CatalogScreen,
    icon: "catalogIcon",
  },
  {
    title: "Home",
    screenComponent: HomeScreen,
    icon: "homeIcon",
  },
  {
    title: "Account",
    screenComponent: AccountScreen,
    icon: "accountIcon",
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          paddingBottom: Platform.OS === "android" ? 20 : 30,
          paddingHorizontal: 20,
        },
      }}
    >
      {navigationTabs.map((tab, i) => (
        <Tab.Screen
          key={i}
          name={tab.title}
          component={tab.screenComponent}
          options={{
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabButton
                icon={tab.icon}
                title={tab.title}
                onPress={onPress}
                focused={accessibilityState.selected}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
