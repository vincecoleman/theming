import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/main";
import { ThemeContextProvider } from "./src/data/themeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <Main/>
    </ThemeContextProvider>
  );
}