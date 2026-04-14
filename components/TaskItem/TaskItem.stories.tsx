import React from 'react';
import { View } from 'react-native';
import { TaskItem } from './TaskItem';

export default {
  title: 'Components/TaskItem',
  component: TaskItem,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16, backgroundColor: '#f5f5f5', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Storybook',
      description: 'Configurar variantes de componentes',
      completed: false,
    },
    onToggle: (id: string) => console.log(`Toggle task ${id}`),
    onMenu: (id: string) => console.log(`Menu task ${id}`),
  },
};

export const Completed = {
  args: {
    ...Default.args,
    task: {
      ...Default.args.task,
      title: 'Tarea Terminada',
      completed: true,
    },
  },
};