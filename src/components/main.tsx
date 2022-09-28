import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {  StyleSheet, Text, View } from "react-native";
import ThemeContext from "../data/themeContext";
import Button from "./button";

export default function Main() {
  const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <View style={[styles.container]}>
      <Text style={[theme.textPrimary]}>Primary Color</Text>
      <Text style={[theme.textSecondary]}>Secondary Color</Text>
      <Text style={[theme.textWarning]}>Warning Text</Text>
      <Text style={[theme.textWarning]}>(Pulling in default for CompHealth to demo default)</Text>
      <Button title="Default Theme" onPress={()=>{changeTheme("default")}}/>
      <Button title="CompHealth Theme" onPress={()=>{changeTheme("compHealth")}}/>
      <Button title="WeatherBy Theme" onPress={()=>{changeTheme("weatherBy")}}/>
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
