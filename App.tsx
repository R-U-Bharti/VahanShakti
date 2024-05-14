import { SafeAreaView, StatusBar, View } from "react-native";
import WebView from "react-native-webview";

function App(): React.JSX.Element {

  // const url = "http://www.thexyz.biz:8789/"
  const url = "https://uat.vahanshakti.in/"

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: url }}
          style={{ flex: 1, marginTop: StatusBar.currentHeight }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;