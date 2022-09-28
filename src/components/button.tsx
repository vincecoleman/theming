import { Button as RNButton } from "react-native";

const Button = (props: { title: string; onPress: () => void }) => {
  return (

      <RNButton
        title={props.title}
        onPress={props.onPress}
      />
  );
};

export default Button;
