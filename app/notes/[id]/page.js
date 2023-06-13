async function getNote(noteId){
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records/${noteId}",
    {next: {revalidate:10} }   // ISR 
    )
    const data = await res.json()
    return data
}


export default async function NotePage({params}) {

    const note = await getNote(params.id)
    return (
        <div>
            <h1>Indi notes</h1>
            <h3> {note.title} </h3>
            <h3> {note.created} </h3>
        </div>
    )

}   