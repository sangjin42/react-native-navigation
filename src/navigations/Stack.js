import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 110,
          backgroundColor: "#95a5a6",
          borderBottomWidth: 5,
          borderBottomColor: "#34495e",
        },
        headerTitleStyle: { color: "#ffffff", fontSize: 24 },
        headerTitleAlign: "center", //안드로이드 타이틀 중앙정렬
        headerTitle: ({ style }) => (
          <MaterialCommunityIcons name="react" style={style} />
          /* 제공되는 아이콘 확인 https://icons.expo.fyi/ */
        ),
        // headerMode: "none",//네비게이터 후선 헤드감추기
      }}
      /* screenOptions 이하를 통해 스택 네비게이션의 화면 배경색을 설정 */
    >
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerTitle: "List Screen",
          /* headerTitle: Screen별 개별 타이틀 */
          headerBackTitleVisible: true,
          /* headerBackTitleVisible: 왼쪽상단 뒤로가기 타이틀표시 (플랫폼갭) */
          headerBackTitle: "Prev",
          /* 뒤로가기 타이틀명 바꾸기 */
          //   headerBackTitleStyle: { fontSize: 24 },
          /* 헤더 백버튼 타이틀의 스타일을 우선변경 */
          headerTitleStyle: { fontSize: 24 },
          /* 헤더 타이틀의 스타일을 우선변경 */
          headerTintColor: "#e74c3c",
          /* 헤더 백버튼 타이틀 및 헤더 타이틀의 스타일을 후선변경. 우선 스타일과 겹치면 적용안됨 */
          headerBackImage: ({ tintColor }) => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === "ios" ? 11 : 0,
            };
            return (
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={30}
                color={tintColor}
                style={style}
              />
            );
          },
        }}
      />
      <Stack.Screen name="Detail" component={Item} />
      {/* Screen 컴퍼넌트의 name은 반드시 서로 다른 값을 가져야 한다 */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
