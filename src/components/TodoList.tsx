import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    //todo list の格納場所
    const [todos, setTodos] = useState<string[]>([]); // string[] は配列の中身が文字列であることを示す

    //新しいtodo list の追加するための入力保管場所
    const [newTodo, setNewTodo] = useState("");

    //新しいTodoをtodos配列に格納する関数
    const addTodo = () => {
        // ...を使うことでtodos配列の中身を展開して新しい配列を生成
        setTodos([...todos, newTodo]);
        setNewTodo(""); // 入力フィールドを空にする
    };

    //指定したindexのtodoを削除する関数
    //削除したいToDoのindexの数値指定
    const deleteTodo = (indexToDelete: number) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete)); // _ は配列の各要素を表す
    };

    return (
        <div>
            {/* newTodoの値が変わるたびに状態の更新 */}
            <input
                type="text"
                value={newTodo}
                onChange={(e) => {
                    setNewTodo(e.target.value);
                }}
            />

            {/* ボタンを押すごとに新しいtodoを追加 */}
            <button onClick={addTodo}>Add Todo</button>

            {/* リスト表示部分 */}
            <ul>
                {/* todo配列の各要素をmap処理。TotoItem component を生成・表示 */}
                {todos.map((todo, index) => (
                    <div>
                        <TodoItem
                            key={index}
                            todo={todo}
                            onDelete={() => {
                                deleteTodo(index); //削除ボタンが押された時にindexを渡して削除
                            }}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
}
