import React, {useState, useContext} from 'react'

const LangContext = React.createContext("hun");

export const LangProvider = ({children}) =>{

    const [lang, setLang] = useState("hun");

    const setLangDeu = () => {
        setLang("deu");
    }

    const setLangHun = () => {
        setLang("hun");
    }

    const contextContent = [lang, setLangHun, setLangDeu];
    
    return <LangContext.Provider value={contextContent}>{children}</LangContext.Provider>;
}

export const useLang = () => {
    const context = useContext(LangContext);
    return context;
  };
  
