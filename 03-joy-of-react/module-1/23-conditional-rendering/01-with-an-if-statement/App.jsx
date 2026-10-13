import Friend from "./Friend";

function App() {
 return(
    <ul>
        <Friend name="Haris" isOnline={true} />
        <Friend name="Sunita" isOnline={false} />
        <Friend name="Aoi" isOnline={true} />
    </ul>
 );
}

export default App;
