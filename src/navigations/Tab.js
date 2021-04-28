import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from "../screens/TabScreens";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Mail">
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: "email" }),
        }}
        /* 탭바 아이콘 바꾸기. TabIcon의 인자를 기본 디폴트(prosp)로 name을 덮어쒸움 */
      />
      <Tab.Screen
        name="Meet"
        component={Meet}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: "video" }),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: "settings" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
