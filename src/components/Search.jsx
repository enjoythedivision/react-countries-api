import {useState} from "react";

export default function Search({search}) {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchQuery)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Type country name..." />
                <button>Search</button>
            </div>
        </form>
        </>
    )
}