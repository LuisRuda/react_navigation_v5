import React from 'react';
import {Container, Text, Button, TextButton} from './styles';

export default function Detail({navigation}) {
  return (
    <Container>
      <Text>Detail screen</Text>
      <Button onPress={() => navigation.navigate('Bottom Tabs')}>
        <TextButton>View bottom tabs</TextButton>
      </Button>
      <Button onPress={() => navigation.navigate('Top Tabs')}>
        <TextButton>View top tabs</TextButton>
      </Button>
    </Container>
  );
}
