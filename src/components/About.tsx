import { useNavigate } from "react-router-dom"
import Contents from "./Contents"

const About = () => {

    const navigate = useNavigate()
    const goTo = () => {
        navigate('/')
    }   

    return (
        <>
            <h1>About</h1>
            <Contents />
            <Contents />
            <Contents />

            <button onClick={goTo}>Ir a Home</button>
        </>
    )
}

export default About