type UsersProps = {
    name: string;
    age: number;
    hobbies: string[];
};

export default function Users({ name, age, hobbies }: UsersProps) {
    return (
        <div className="userBox">
            <h2>Name: {name} </h2>
            <p>Age: {age} </p>
            <p>Hobbies:</p>
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index}>{hobby}</li>;
                })}
            </ul>
        </div>
    );
}
