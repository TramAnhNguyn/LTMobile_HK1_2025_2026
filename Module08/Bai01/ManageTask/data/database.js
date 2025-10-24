import * as SQLite from 'expo-sqlite';

export async function openDB() {
  const db = await SQLite.openDatabaseAsync('tasks.db');

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    );
  `);

  // Thêm dữ liệu mẫu nếu bảng trống
  const existing = await db.getAllAsync('SELECT * FROM tasks');
  if (existing.length === 0) {
    await db.runAsync('INSERT INTO tasks (title, completed) VALUES (?, ?)', ['Learn React Native', 0]);
    await db.runAsync('INSERT INTO tasks (title, completed) VALUES (?, ?)', ['Build SQLite demo', 1]);
    await db.runAsync('INSERT INTO tasks (title, completed) VALUES (?, ?)', ['Test Database Display', 0]);
  }

  return db;
}
