type TodoItemProps = {
    todo: string;
};

export default function TodoItem({ todo }: TodoItemProps) {
    return <li>{todo}</li>;
}
