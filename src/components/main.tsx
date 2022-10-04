import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeContext from "../data/themeContext";
import { ITheme } from "../themes/themes.types";
import Button from "./button";

export default function Main() {
  const { theme, selectTheme } = useContext(ThemeContext);

  const styles = createStyles(theme)


  return (
    <View style={[styles.container]}>
      <Text style={styles.primaryText}>Primary Color</Text>
      <Text style={styles.secondaryText}>Secondary Color</Text>
      <Text style={styles.warningText}>Warning Text </Text>
      <Text style={styles.warningText}>(pulling in default for CompHealth to demo defaults) </Text>

      <Button onPress={()=>{selectTheme("default")}} title="Default Theme" />
      <Button onPress={()=>{selectTheme("compHealth")}} title="CompHealth Theme" />
      <Button onPress={()=>{selectTheme("weatherBy")}} title="WeatherBy Theme" />
      <StatusBar style="auto" />
    </View>
  );
}

const createStyles = (theme: ITheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    primaryText: {
      color: theme.colors.primary
    },
    secondaryText: {
      color: theme.colors.secondary
    },
    warningText: {
      color: theme.colors.warning
    },
  });
};
