import React from 'react';
import { View } from 'react-native';
import TaskListCard from './TaskListCard';

export default {
  title: 'Components/TaskListCard',
  component: TaskListCard,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const NewList = {
  args: {
    item: {
      id: '1',
      title: 'Lista de Tareas',
      subtitle: '0',
      percentage: 0,
      tags: ['por hacer'],
      idColor: 'blue',
      idIcon: 'list',
    },
  },
};

export const InProgress = {
  args: {
    item: {
      "id": "2",
      "title": "Lista de ToDo",
      "subtitle": "5/10",
      "percentage": 90,
      "tags": ["trabajo"],
      "idColor": "green",
      "idIcon": "code"
    },
  },
};