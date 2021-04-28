import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items = [
  { _id: 1, name: "react Native" },
  { _id: 2, name: "react Navigation" },
  { _id: 3, name: "Hanbit" },
];

const List = ({ navigation }) => {
  const _onPress = item => {
    navigation.navigate("Detail", { id: item._id, name: item.name });
  };

  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(item => (
        <Button
          key={item._id}
          title={item.name}
          onPress={() => _onPress(item)}
          /* item인자는 items배열의 특정순번의 객체 */
        />
      ))}
    </Container>
  );
};

export default List;
