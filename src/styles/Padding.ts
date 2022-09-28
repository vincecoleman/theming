import { StyleSheet } from "react-native";

const spacing = {
  1: 10,
  2: 15,
  3: 20,
  4: 25,
  5: 30,
  6: 35,
};

const generateStyles = () => {
  const obj: { [key: string]: any } = {};

  const spacers = Object.keys(spacing);

  spacers.forEach((spacer) => {
    obj[`p${spacer}`] = {
      padding: spacing[spacer],
    };
  });

  return obj;
};

export default StyleSheet.create({
});
