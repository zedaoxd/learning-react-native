import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Loading } from "@/components/loading";
import { Routes } from "@/routes";
import { theme } from "@/theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
