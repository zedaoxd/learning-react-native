import { StatusBar } from "react-native";

import { Home } from "./src/screens/home";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
