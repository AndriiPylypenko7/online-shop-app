import Icon, { IconByKey } from "../../components/shared/Icon/Icon";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/theme";
import { useEffect, useRef } from "react";
import createAnimatedComponent from "../../utils/createAnimatedComponent";

interface IButtonIconProps {
  icon: IconByKey;
  title: string;
  onPress: (GestureResponderEvent) => void;
  focused: boolean;
}

const TabButton = ({ icon, focused, onPress, title }: IButtonIconProps) => {
  const animation = useRef(new Animated.Value(0));
  const AnimatedIcon = createAnimatedComponent(Icon);

  useEffect(() => {
    Animated.spring(animation.current, {
      toValue: focused ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [focused, animation.current]);

  const widthAnimation = animation.current.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [40, 110, 110],
  });

  const backgroundColorAnimation = animation.current.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.white, colors.greenLight],
  });

  const iconColorAnimation = animation.current.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [colors.lightGrey, colors.lightGrey, colors.greenSecondary],
  });

  const textScaleAnimation = animation.current.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <TouchableOpacity style={css.container} onPress={onPress}>
      <Animated.View
        style={[
          css.button,
          {
            width: widthAnimation,
            backgroundColor: backgroundColorAnimation,
          },
        ]}
      >
        <AnimatedIcon color={iconColorAnimation} icon={icon} size={24} />
        {focused ? (
          <Animated.Text
            style={[
              css.text,
              {
                transform: [
                  {
                    scale: textScaleAnimation,
                  },
                ],
              },
            ]}
            numberOfLines={1}
          >
            {title}
          </Animated.Text>
        ) : null}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabButton;

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 40,
  },
  text: {
    marginLeft: 8,
    color: colors.greenSecondary,
    fontWeight: "bold",
  },
});
