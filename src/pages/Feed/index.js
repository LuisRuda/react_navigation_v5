import React from 'react';
import {Container, Text, Button, TextButton} from './styles';

export default function Feed({navigation}) {
  return (
    <Container>
      <Text>Navigation Drawer</Text>
      <Button onPress={() => navigation.navigate('Detail')}>
        <TextButton>Go to feed item</TextButton>
      </Button>
    </Container>
  );
}
