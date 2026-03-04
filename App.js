import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'web' ? (
        <iframe
          src=" https://www.google.com"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Googlee"
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.google.com' }}
          style={{ flex: 1 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});