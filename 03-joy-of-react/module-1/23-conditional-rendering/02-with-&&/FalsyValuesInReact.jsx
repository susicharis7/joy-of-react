function FalsyValues() {
 return (
    <ul>
    <li>false: {false}</li> 
    <li>undefined: {undefined}</li>
    <li>null: {null}</li>
    <li>Empty string: {''}</li>
    <li>Zero: {0}</li>
    <li>NaN: {NaN}</li>
    </ul>
 );
}

export default FalsyValues;
/*
React ignores `false`
React ignores `undefined`
React ignores `null`
React returns empty for "empty string"
React returns value 0
React ignores `NaN`
*/