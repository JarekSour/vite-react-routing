import { useParams } from 'react-router-dom'
import Contents from './Contents'

const Producto = () => {

    const { nombreParam } = useParams()

    return (
        <>
            <h1>{nombreParam}</h1>
            <Contents />
        </>
    )
}

export default Producto