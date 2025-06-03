import { useState } from "react"
import 'bulma/css/bulma.css';


let initialState = [
    { "company": "fooCompany", "contact": "fooContact", "country": "FooCountry" },
    { "company": "barCompany", "contact": "barContact", "country": "barCountry" },
    { "company": "bazCompany", "contact": "bazContact", "country": "bazCountry" },
    { "company": "deltaCompany", "contact": "deltaContact", "country": "deltaCountry" },
]


export default function MainForm2() {
    // define variables
    let [users, setUsers] = useState(initialState)
    let [company, setCompany] = useState("")
    let [contact, setContact] = useState("")

    // button functions
    let handleCompany = e => setCompany(e.target.value)
    let handleContact = e => setContact(e.target.value)

    // page structure
    return (
        <div className="container" style={{ maxWidth: 600, marginTop: 40 }}>

            <h1 className="title is-1">Companies</h1>

            <h3 className="title is-3">Register</h3>

                <div className="field">
                    <label className="label">Company name:</label>
                    <input className="input" type="text" value={company} onChange={handleCompany}/>
                </div>

                <div className="field">
                    <label className="label">Contact:</label>
                    <input className="input" type="text" value={contact} onChange={handleContact}/>
                </div>

            <div className="buttons">
                <button className='button is-primary'>Add</button>
            </div>
            
            <h3 className="title is-3" style={{ marginTop: 40 }}>Data</h3>

            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((el, idx) => {
                            return (<tr key={idx}>
                                <td>{el.company}</td>
                                <td>{el.contact}</td>
                                <td>{el.country}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}