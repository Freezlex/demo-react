import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {StyleSheet} from "react-native";
export default class ButtonBlockExample extends Component {
  render() {
    return (
        <Container style={styles.container}>
          <Content>
            <Button block style={styles.button}>
              <Text>Jouer</Text>
            </Button>
            <Button block info style={styles.button}>
              <Text>Créer une salle</Text>
            </Button>
            <Button block info style={styles.button}>
              <Text>Rejoindre</Text>
            </Button>
            <Button block info style={styles.button}>
              <Text>Partie rapide</Text>
            </Button>
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  }
});

