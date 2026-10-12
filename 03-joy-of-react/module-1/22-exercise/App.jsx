import Avatar from "./Avatar";

const data = [
    {
        id: '001',
        src: 'https://sandpack-bundler.vercel.app/img/avatars/001.png',
        alt: 'person with curly hair and black T-shirt'
    },
    {
        id: '002',
        src: 'https://sandpack-bundler.vercel.app/img/avatars/002.png',
        alt: 'person wearing a hijab and glasses'
    },
    {
        id: '003',
        src: 'https://sandpack-bundler.vercel.app/img/avatars/003.png',
        alt: 'person with short hair wearing a blue hoodie'
    },
    {
        id: '004',
        src: 'https://sandpack-bundler.vercel.app/img/avatars/004.png',
        alt: 'person with a pink mowhawk and a raised eyebrow'
    }
];

function App() {
    return(
        <div>
            {data.map((newData) => {
                return <Avatar 
                 key={newData.id}
                 src={newData.src}
                 alt={newData.alt}
                />
            })}
        </div>
    );
}

// Second way - Video
export function SecondApp() {
    return(
        <div>
            {data.map(({ id, alt }) => (
               <Avatar 
                key={id}
                src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`}
                alt={alt}
               /> 
            ))}
        </div>
    );
}

export default App;