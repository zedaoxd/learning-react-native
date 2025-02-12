import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    color: colors.gray[300],
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: colors.gray[300],
    fontSize: 14,
  },
});
