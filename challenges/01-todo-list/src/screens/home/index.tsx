import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

import { Button } from "@/components/button";
import { EmptyTodo } from "@/components/empty-todo";
import { Input } from "@/components/input";
import { Task } from "@/components/task";
import { TaskInfo } from "@/components/task-info";

import { styles } from "./styles";

export function Home() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleComplete = (id: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(newTasks);
  };

  const handleCreate = (title: string) => {
    const id = new Date().getMilliseconds().toString();

    setTasks((prev) => [{ id, title, completed: false }, ...prev]);
    setTaskName("");
  };

  const sortedTasks = tasks.sort(
    (a, b) => Number(a.completed) - Number(b.completed)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/rocket.png")}
          style={styles.rocket}
        />

        <View style={styles.headerText}>
          <Text style={styles.to}>to</Text>
          <Text style={styles.do}>do</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentForm}>
          <Input
            placeholder="Crie sua tarefa"
            style={styles.input}
            value={taskName}
            onChangeText={setTaskName}
            onSubmitEditing={() => handleCreate(taskName)}
          />

          <Button onPress={() => handleCreate(taskName)} />
        </View>

        <View style={styles.tasksInfoContainer}>
          <TaskInfo title="Criadas" number={tasks.length} />
          <TaskInfo
            title="Concluídas"
            number={tasks.filter((task) => task.completed).length}
            variant="secondary"
          />
        </View>

        <FlatList
          data={sortedTasks}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Task
              completed={item.completed}
              id={item.id}
              title={item.title}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          )}
          ListEmptyComponent={EmptyTodo}
          style={styles.tasksListContainer}
          contentContainerStyle={styles.taskItem}
        />
      </View>
    </View>
  );
}
