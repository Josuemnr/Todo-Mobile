import { TaskList } from "@/types/TaskLists";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { Box } from "../ui/box";
import { Progress, ProgressFilledTrack } from "../ui/progress";

//lado izquierdo es tipado, lado derecho es el valor que se le asigna a ese tipo
const TaskListCard: React.FC<{item: TaskList}> = ({item}) => {
    //van los estados como UserState

    //Van funciones
    //handlepress es que se ejecute algo cuando se pulse
    const handlePress = () => {
        router.push({
            pathname: "/lists/[id]",
            params: { 
                id: item.id,
                title: item.title,
            },
        });
    };

    //van useEffects

    //va el render
    return (
        <Pressable className="p-4 border border-gray-300 rounded-xl mb-3" 
        onPress={handlePress}> 
        {/* titulo */}
        <Text className="text-lg font-semibold">{item.title}</Text>
        {/* Subtitulo */}
        <Text className="text-sm text-gray-500 mb-2">{item.subtitle} tasks</Text>
        <Box className="mb-3">
            <Progress value={item.percentage} size="md">
                <ProgressFilledTrack/> 
            </Progress>
            <Text className="text-xs text-gray-500 mt-1">
                {item.percentage} completed
            </Text>
        </Box>
        </Pressable>
    );
};

export default TaskListCard;