import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle) {
      const task = {
        title: newTaskTitle,
        id: Date.now(),
        done: false,
      };
  
      setTasks([...tasks, task]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(
      tasks.map(
        task => task.id === id ? { ...task, done: !task.done } : { ...task }
      )
    );
  }

  function handleRemoveTask(id: number) {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}