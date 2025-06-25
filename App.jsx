import Header from "./components/Header"
import Entry from "./components/Entry"
import Image from "./images/fuji-mountain.jpeg"
import data from "./data"

export default function App(){
    const result = data.map((entry) => {
        return <Entry 
        key={entry.id}
        {...entry}
        />
    })

    return(
        <>
        <Header />
        {result}
        </>
    )
}