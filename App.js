import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function App() {
  const progress = useSharedValue(0.5);

  const toggle = () => {
    progress.value = withTiming(progress.value === 0.5 ? 1 : 0.5);
  };

  const rStyle = useAnimatedStyle(
    () => ({
      width: 100,
      aspectRatio: progress.value,
      backgroundColor: "red",
    }),
    []
  );
  return (
    <View style={styles.container}>
      <Animated.View style={rStyle} />
      <Button title="toggle" onPress={toggle} />
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
