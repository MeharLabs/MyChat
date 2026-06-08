import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Index</Text>
        </View>

        <Link href={"/(tabs)/profile"}>
          <Text>Go to Profile</Text>
        </Link>

        <Link href={"/(tabs)/details"}>
          <Text>Go to Details</Text>
        </Link>

        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Index;

const styles = StyleSheet.create({});
