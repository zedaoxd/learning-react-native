import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  primary: {
    color: colors.blue,
    fontWeight: "bold",
    fontSize: 14,
  },
  secondary: {
    color: colors.purple,
    fontWeight: "bold",
    fontSize: 14,
  },
  number: {
    backgroundColor: colors.gray[400],
    color: colors.gray[200],
    width: 25,
    textAlign: "center",
    borderRadius: 8,
  },
});
