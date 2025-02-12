import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 8,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    marginTop: 36,
    marginBottom: 42,
  },
  emptyList: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
  },
});
