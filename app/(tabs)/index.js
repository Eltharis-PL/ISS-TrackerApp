import React from 'react';
import { StyleSheet, View } from 'react-native';

import MapTracker from '../../src/components/map/mapTracker';

export default function App() {
  return (
    <View style={styles.container}>
      <MapTracker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
