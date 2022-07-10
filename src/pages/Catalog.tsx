import { Link } from 'react-router-dom'
import { ReactUI } from '../components/ReactUI'
import { Table } from '../components/Table'

import '../styles/catalog.scss'

export function Catalog() {
    return(
        <div className='main'>
            <div className="catalog">
                <h1>Github Catalog</h1>
                <p>Sereval examples of React</p>

                <div>
                    <ReactUI text='Catalog' />
                    <p>Go to <Link to="/">App</Link> </p>
                </div>

            </div>
            <section>
                <Table />
            </section>
        </div>
    )
}