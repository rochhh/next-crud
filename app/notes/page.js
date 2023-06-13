import Link from "next/link";

async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records",
    {cache:'no-store'}
    )
    const data = await res.json()
    return data?.items 
}

export default async function Page () {
  
    const notes = await getNotes();
  
    return (
    <div>
        <h1>Notes</h1>
        <div>
            {notes?.map( (note) => {
                return <Note key={note.id} note={note} />
            })}
        </div>
    </div>
  )
}

export function Note({note}){
    
    const {id ,title , content , created} = note
    
    return(
        <div>
            <Link href={`/notes/${id}`} >
            
            <div>
                <h3>{title}</h3>
                <h4> {created} </h4>
                <p> {created} </p>
            </div>
            
            </Link>
        </div>
    )
}

