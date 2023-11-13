import React from "react";
import { Animated } from "react-native";

function createAnimatedComponent<T>(Component: React.FC<T>) {
  return Animated.createAnimatedComponent(
    class AnimatedComponent extends React.Component<T, {}> {
      render() {
        return <Component {...this.props} />;
      }
    }
  );
}

export default createAnimatedComponent;
