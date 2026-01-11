import { HomeHeader } from "@/components/HomeHeader";
import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
        <HomeHeader data={{ total: "R$ 2.680,56" }} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,       
    }
})