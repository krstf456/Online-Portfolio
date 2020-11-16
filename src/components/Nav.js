import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <StyledNav>
            <h1><a id="logo" to="/">Portfolio</a></h1>
            <ul>
                <li>
                    <Link to="/">1. About me</Link>
                </li>
                <li>
                    <Link to="/work">2. My Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Me</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-family: "Lobster", cursive;
        font-weight: lighter;
        font-size: 1.5rem;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`

export default Nav