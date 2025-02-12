import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    backgroundColor: colors.gray[500],
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    overflow: "hidden",
  },
  title: {
    color: colors.gray[200],
    flex: 1,
    flexShrink: 1,
  },
  completed: {
    textDecorationLine: "line-through",
  },
});
