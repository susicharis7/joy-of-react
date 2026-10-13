function Friend({ name, isOnline }) {
    return(
        <li>
            {isOnline && <div className="green-dot" />}
            {name}
        </li>
    );
}

export default Friend;