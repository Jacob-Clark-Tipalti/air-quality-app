import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      contentStyle: { backgroundColor: '#FCFCFC' }
    }}>
      <Stack.Screen 
        name="index" 
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}
