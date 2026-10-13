import Friend from "./Friend";

function App() {
    return(
        <ul>
            <Friend name={'Andrew'} isOnline={false} />
            <Friend name={'Harrison'} isOnline={true} />
            <Friend name={'Squid'} isOnline={true} />
        </ul>
    );
}

export default App;
