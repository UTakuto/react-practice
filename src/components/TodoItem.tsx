type TodoItemProps = {
    todo: string;
    onDelete: () => void; //削除用の関数を親から受け取る
};

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
    return (
        <li>
            {todo}
            {/* 削除ボタン追加。clickでonDelete関数の呼び出し */}
            <button onClick={onDelete} style={{ margin: " 0 10px" }}>
                delete
            </button>
        </li>
    );
}
