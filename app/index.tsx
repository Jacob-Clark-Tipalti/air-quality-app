import { FocusedView } from "@/components/FocusedView";
import { Header } from "@/components/Header";
import { VariableItem } from "@/components/VariableItem";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <Header location="City of London, England" />
      <ScrollView contentContainerStyle={styles.view}>
        <FocusedView value={20} rating="Fair" name="Air Quality" />
        <VariableItem value={11.4} rating='Medium' name='NO2' />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    top: 150,
  }
})
