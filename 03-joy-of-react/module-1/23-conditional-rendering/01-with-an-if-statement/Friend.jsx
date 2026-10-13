function Friend({ name, isOnline }) {
    let prefix;

    if (isOnline) {
        prefix = <div className="green-dot" />
    } else {
        prefix = <div className="red-dot" />
    }

    return(
        <li>
            {prefix}
            {name}
        </li>
    );
}

export default Friend;