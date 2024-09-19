function MyFavoriteFoods() {
    const favoriteFoods = [
        "ピザ",
        "寿司",
        "たこ焼き",
        "パスタ",
        "アイスクリーム",
    ];
    return (
        <div>
            <h2>MyFavoriteFoods</h2>
            <ul>
                {favoriteFoods.map((food, index) => {
                    return <li key={index}>{food}</li>;
                })}
            </ul>
        </div>
    );
}

export default MyFavoriteFoods;
