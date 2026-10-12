import ContactCard from "./ContactCard";
import { data } from './data';

function App() {
    return(
        <ul>
             {data.map((newData) => {
                return <ContactCard
                 key={newData.id} 
                 name={newData.name}
                 job={newData.job}
                 email={newData.email}
                />
            })} 
        </ul>
    );
}

export default App;