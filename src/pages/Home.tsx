import React, { useState } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';

export const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log('Count is:', count);
    }, 1000);
  };

  return (
    <View style={styles.background}>
      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)}>Increment</Button>
      <Text onPress={handleClick}>Log after 1s</Text>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
}));
