import { useEffect, useState } from "react";
import { fetchPosts } from "./apiClient";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default function FetchData() {
    //api dataをここに保存
    const [data, setData] = useState<Post[]>([]);

    //useEffectを使って、コンポーネントがマウントされた時にfetchPosts関数を呼び出します
    //からの依存配列[]を渡しているので、この処置はコンポーネントの最初の描画時に一度だけ実行されます。
    useEffect(() => {
        //fetchPostsを呼び出して、データを取得し、そのデータをsetData関数に保存される
        fetchPosts().then((data) => setData(data));
    });

    return (
        <div>
            <ul>
                {data.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
