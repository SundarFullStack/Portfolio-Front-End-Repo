import React,{createContext,useState} from 'react'

export const MyContext = createContext({
    toggle: null,
    setToggle:()=>Promise
});

const ContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);
  return (
      <MyContext.Provider value={{toggle, setToggle}}>{children}</MyContext.Provider>
  )
}

export default ContextProvider