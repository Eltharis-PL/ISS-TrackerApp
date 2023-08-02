import { Tabs } from "expo-router";

export default function AppLayout() {
    return (

        <Tabs screenOptions={{
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Tracker',
                }}
            />
            <Tabs.Screen
                name="peopleOnSpace"
                options={{
                    title: 'OnSpace',
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                }}
            />
        </Tabs>
    );
};
