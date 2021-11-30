import i18next from 'i18next';
import React, {useState, useContext} from 'react'

const LangContext = React.createContext();

export const LangProvider = ({children}) =>{

    const [lang, setLang] = useState(i18next.language);

    const setLangDeu = () => {
        setLang("deu");
    }

    const setLangHun = () => {
        setLang("hu");
    }

    const contextContent = [lang, setLangHun, setLangDeu];
    
    return <LangContext.Provider value={contextContent}>{children}</LangContext.Provider>;
}

export const useLang = () => {
    const context = useContext(LangContext);
    return context;
  };
  
