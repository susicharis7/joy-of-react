import VisuallyHidden from "./VisuallyHidden";

function Friend({ name, isOnline }) {
    return(
        <li className="friend">
            {isOnline && <div className="green-dot"/>}
            {name}
            {isOnline && (<VisuallyHidden> Online </VisuallyHidden>)}
        </li>
    );
}

function App() {
    return(
        <ul className='friend-list'>
            <Friend name ="Haris" isOnline={false}/>
            <Friend name ="Andrew" isOnline={true}/>
            <Friend name ="Kindley" isOnline={true}/>
        </ul>
    )
}

export default App;