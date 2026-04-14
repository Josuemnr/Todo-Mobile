import { Text, View } from "react-native";

import { Pressable } from "@/components/ui/pressable";
import { router } from "expo-router";
import React from "react";

const AboutScreen = () => {
    return (
        <View>
            <Text style = {{fontSize: 20, fontWeight: "bold", color: "black"}}>
                About Screen
            </Text>
            <Pressable onPress={() => router.push("/storybook")}>
                <Text>Storybook</Text>
            </Pressable>
        </View>
    );
};

export default AboutScreen;