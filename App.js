import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import * as firebase from "firebase";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDsZcAZ6iugHqsR5u0FJYKhQEnlV2OBjek",
  authDomain: "mealstogo-8ba1d.firebaseapp.com",
  projectId: "mealstogo-8ba1d",
  storageBucket: "mealstogo-8ba1d.appspot.com",
  messagingSenderId: "689592483236",
  appId: "1:689592483236:web:18c0eaa5cf637620fdd531",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"> </ExpoStatusBar>
    </>
  );
}
