import { useContext } from "react";
import { Button as RNButton, View } from "react-native";
import ThemeContext from "../data/themeContext";

const Button = (props: { title: string; onPress: () => void }) => {
  const { theme } = useContext(ThemeContext);
  return (

      <RNButton
        title={props.title}
        onPress={props.onPress}
        color={theme.textError.color}
      />
  );
};

export default Button;
