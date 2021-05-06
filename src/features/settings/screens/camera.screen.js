import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { View, Text, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
      <Camera type={type}>
        <View style={{ width: "100%", height: "100%" }}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ color: "white" }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
