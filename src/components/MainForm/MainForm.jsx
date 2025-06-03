import { useState } from "react"

export default function MainForm() {
    //let [users, setUsers] = useState([{"id":1, "name":"foo"},{"id":2, "name":"bar"},{"id":3, "name":"quz"}]);
    let [users, setUsers] = useState(["foo","bar","quz"]);
    let [data, setData] = useState("")
    let [update, setUpdate] = useState("")

    // agrega a la lista lo que esta en el campo de texto
    let fnAdd = e => setUsers([...users, data])

    // filtra la data existente removiendo todo lo que sea diferente
    // a lo que esta en el campo de texto
    let fnDelete = e => setUsers([...users.filter(el=>el !== data)])

    let fnUpdate = e => setUsers([...users.map(el=>el == data?update:el)])

    let handleAlias = e => setData(e.target.value)

    // cambia uno de los valores de la lista segun lo escrito en los textboxes
    let handleUpdate = e => setUpdate(e.target.value)

    // Limpiar los formularios
    let fnClear = e => {
        setData("")
        setUpdate("")
    }

    return(
        <div>
            <label>alias</label>
            <input type="text" name="alias" value={data} onChange={handleAlias}/>
            <br/>
            <label>update</label>
            <input type="text" name="update" value={update} onChange={handleUpdate}/>
            <br/>
            {users.map((el, idx) => <li key={idx}>{el}</li>)}
            <br/>
            <button onClick={fnAdd}>Add</button>
            <button onClick={fnDelete}>Delete</button>
            <button onClick={fnUpdate}>Update</button>
            <button onClick={fnClear}>Clear</button>
        </div>
    )

}