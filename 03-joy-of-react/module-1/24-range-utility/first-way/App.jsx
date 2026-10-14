import StarRating from "./StarRating";

const items = [
    { id: 'winters-orbit', title: "Winter's Orbit", rating: 5 },
    { id: 'dial-d-for-deadman', title: 'Dial D for Deadman', rating: 4 },
    { id: 'words-and-things', title: 'Words And Things', rating: 0 },
];

function App() {
    return (
        <div className="wrapper">
            {items.map((item) => (
                <article key={item.id} className="item">
                    <h2>{item.title}</h2>
                    <StarRating rating={item.rating} />
                    <p>Rating: {item.rating} / 5</p>
                </article>
            ))}
        </div>
    );
}

export default App;
