import ProfileCard from "./ProfileCard";
import { profiles } from "./data";

function App() {
    return(
        <>
            {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
            ))}
        </>
    )
}

export default App;