import '../styles/table.scss'

export function Table() {
    return(
        <form>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
                <tbody>
                    <tr>
                        <td>Paulo</td>
                        <td>React Developer JR</td>
                    </tr>
                    <tr>
                        <td>Daniel</td>
                        <td>Full Stack PL</td>
                    </tr>
                    <tr>
                        <td>Michelle</td>
                        <td>React Developer JR</td>
                    </tr>
                    <tr>
                        <td>Mayk</td>
                        <td>Full Stack SR</td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

