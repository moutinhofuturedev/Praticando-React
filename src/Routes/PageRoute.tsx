import { BrowserRouter , Route , Routes } from 'react-router-dom'

import App from '../App'
import { Catalog } from '../pages/Catalog'

export function PageRoute() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/catalog" element={<Catalog />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}