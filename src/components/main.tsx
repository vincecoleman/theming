import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {  StyleSheet, Text, View } from "react-native";
import ThemeContext from "../data/themeContext";
import Button from "./button";

export default function Main() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <View style={[styles.container, theme.bgSecondary]}>
      <Text style={[theme.textPrimary]}>Check out my cool theme!!!!</Text>
      <Button title="Toggle Theme" onPress={toggleTheme}/>
      <StatusBar style="auto" />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
