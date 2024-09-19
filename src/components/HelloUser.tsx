type HelloUserProps = {
    name: string;
};

export default function HelloUser({ name }: HelloUserProps) {
    return <h1>Hello , {name}</h1>;
}
