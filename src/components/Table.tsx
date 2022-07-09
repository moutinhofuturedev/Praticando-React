import { useEffect, useState } from 'react'
import '../styles/table.scss'

export function Table() {
    const [ repositories, setRepositories ] = useState<string[]>([])

    useEffect(() => {fetch('https://api.github.com/users/moutinhofuturedev/repos')
    .then((response) => response.json()).then((data) => {
        const repositoiesNames = data.map((item: { name: any }) => item.name)

        setRepositories(repositoiesNames)
    })
}, [])

    return(
        <div className='box'>
            <img src="https://www.github.com/moutinhofuturedev.png" alt="" />
            <strong>Paulo Moutinho</strong>
            <p>Frontend Software Enginner</p>
            <ol>
                {repositories.map((repo) => (<li key={repo}>{repo}</li>))}
            </ol>
        </div>
    )
}

