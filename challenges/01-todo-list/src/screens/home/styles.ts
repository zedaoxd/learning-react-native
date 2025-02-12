import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
  },
  header: {
    backgroundColor: colors.gray[700],
    height: 173,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  rocket: {
    width: 19,
    height: 31,
  },
  headerText: {
    flexDirection: "row",
  },
  to: {
    color: colors.blue,
    fontSize: 31,
    fontWeight: "bold",
  },
  do: {
    color: colors.purpleDark,
    fontSize: 31,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 16,
    width: "100%",
    flex: 1,
  },
  contentForm: {
    width: "100%",
    marginTop: -25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  input: {
    flex: 1,
  },
  tasksInfoContainer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
  },
  tasksListContainer: {
    width: "100%",
    flex: 1,
    marginTop: 16,
  },
  taskItem: {
    gap: 16,
  },
});
