import React, { useLayoutEffect } from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Item = ({ navigation, route }) => {
  useLayoutEffect(() => {
    /* useEffect 훅과 사용법이 동일. 차이는 렌더링 되기 전에 실행. */
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: "#ffffff",
      headerLeft: ({ onPress, tintColor }) => {
        return (
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            style={{ marginLeft: 11 }}
            color={tintColor}
            onPress={onPress}
            /* 뒤로가기 버튼기능 전달. 따로 설정하지 않으면 디폴트로 뒤로가기 기능으로 돼 있음. */
          />
        );
      },
      headerRight: ({ tintColor }) => (
        <MaterialCommunityIcons
          name="home-variant"
          size={30}
          style={{ marginRight: 11 }}
          color={tintColor}
          onPress={() => navigation.popToTop()}
          /* 쌓인 화면을 내보내고, 첫화면으로 돌아가는 내장함수 */
        />
      ),
    });
  });
  return (
    <Container>
      <StyledText>ID: {route.params.id}</StyledText>
      <StyledText>Name: {route.params.name}</StyledText>
    </Container>
  );
};

export default Item;
