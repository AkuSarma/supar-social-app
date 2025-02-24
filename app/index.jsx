import { useRouter } from "expo-router";
import { Text, View} from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import Button from "../components/Button";

export default function Index() {
  const router = useRouter();
  return (
    <ScreenWrapper
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title='welcome' onPress={() => router.push('welcome')} />
      
    </ScreenWrapper>
  );
}
