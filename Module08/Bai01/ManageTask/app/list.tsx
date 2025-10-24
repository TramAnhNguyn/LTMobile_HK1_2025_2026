import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { openDB } from '../data/database';

export default function ListScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const db = await openDB();
      const data = await db.getAllAsync('SELECT * FROM tasks');
      setTasks(data);
    })();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={[styles.taskText, item.completed ? styles.done : null]}>
        {item.completed ? '✅' : '⬜'} {item.title}
      </Text>
    </View>
  );



  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TextInput style={styles.input} placeholder='Search'></TextInput>
      </View>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>LIST OF TASK</Text>
        <FlatList data={tasks} keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    height: 30,
    width: 300
  },
  taskItem: { backgroundColor: '#fff', padding: 10, marginVertical: 5, borderRadius: 6 },
  taskText: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: 'gray' },
});
