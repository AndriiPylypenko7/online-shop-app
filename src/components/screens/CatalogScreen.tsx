import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants/theme";

const CatalogScreen = () => {
  return (
    <LinearGradient
      colors={[colors.light, colors.greenLightest, colors.light]}
      style={css.container}
    >
      <Text style={css.text}>Catalog</Text>
    </LinearGradient>
  );
};

export default CatalogScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
  },
});
