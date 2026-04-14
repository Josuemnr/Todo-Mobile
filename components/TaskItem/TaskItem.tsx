import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Pressable } from "react-native";
//logica de cada tarea individual, se le pasa la tarea, 
// una funcion para cambiar el estado de la tarea (completada o no)
//  y una funcion para mostrar el menu de la tarea
type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type Props = {
  task: Task;
  onToggle: (id: string) => void; //funcion para cambiar el estado de la tarea (completada o no)
  onMenu: (id: string) => void; //funcion para mostrar el menu de la tarea
};

export function TaskItem({ task, onToggle, onMenu }: Props) { //componente para cada tarea individual
  return (
    <Box //componente de contenedor para cada tarea
      className={`flex-row items-center justify-between p-4 rounded-xl mb-3 ${
        task.completed ? "bg-gray-200" : "bg-white border border-gray-300"
      }`}
    >
      {/* LEFT SIDE  */} 
      <Box className="flex-row items-center flex-1 gap-3">
        {/* Checkbox */}
        <Pressable
          onPress={() => onToggle(task.id)}
          className={`w-6 h-6 rounded-md border items-center justify-center ${
            task.completed ? "bg-green-600 border-green-600" : "border-gray-400"
          }`}
        >
          {task.completed && <Text className="text-white text-xs">✓</Text>}
        </Pressable>

        {/* Text */}
        <Box className="flex-1">
          <Text
            className={`font-semibold ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </Text>

          <Text className="text-sm text-gray-500">{task.description}</Text>
        </Box>
      </Box>

      {/* RIGHT SIDE (3 dots) */}
      <Pressable onPress={() => onMenu(task.id)} className="px-2 py-1">
        <Text className="text-gray-400 text-lg">⋮</Text>
      </Pressable>
    </Box>
  );
}