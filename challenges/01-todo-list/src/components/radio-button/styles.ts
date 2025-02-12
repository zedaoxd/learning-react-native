import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  checked: {
    backgroundColor: colors.purple,
    borderRadius: "50%",
    padding: 3,
  },
  unchecked: {
    width: 22,
    height: 22,
    borderWidth: 3,
    borderRadius: "50%",
    borderColor: colors.blue,
  },
});
