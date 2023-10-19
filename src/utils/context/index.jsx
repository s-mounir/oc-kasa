import { createContext,useState } from "react";

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
    const [nav, setNav] = useState('homepage')
    const toggleNav = () => {
        setNav(nav === 'homepage' ? 'about' : 'homepage')
    }
 
    return (
        <NavContext.Provider value={{ nav, toggleNav }}>
            {children}
        </NavContext.Provider>
    )
}