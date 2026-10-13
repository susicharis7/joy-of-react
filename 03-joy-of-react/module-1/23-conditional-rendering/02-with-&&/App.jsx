import React from "react";
import Friend from "./Friend";
import ShoppingList from "./ShoppingList";

function App() {
    return(
        <ul>
            <Friend name={'Andrew'} isOnline={false} />
            <Friend name={'Harrison'} isOnline={true} />
            <Friend name={'Squid'} isOnline={true} />
        </ul>
    )
}

function SecondApp() {
    const shoppingList = [];
    const numOfItems = shoppingList.length;

    return(
        <>
        {numOfItems && <ShoppingList items={shoppingList} />}
        </>
    )

    // React will ignore most falsy values like false or null, but it won't ignore the number zero
}

export default SecondApp;