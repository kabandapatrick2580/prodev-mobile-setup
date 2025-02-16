import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
export default function Index() {
  return (

      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ImageBackground
            source={require('../assets/images/background-image.png')}
            resizeMode="cover"
          >
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>

  );
}
