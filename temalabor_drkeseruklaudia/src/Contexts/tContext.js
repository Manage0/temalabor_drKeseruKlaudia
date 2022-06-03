import i18next from 'i18next';
import React, {useState, useContext} from 'react'

const LangContext = React.createContext();

export const LangProvider = ({children}) =>{

    const [t, sett] = useState(true)

    const contextContent = {t,sett};
    
    return <LangContext.Provider value={contextContent}>{children}</LangContext.Provider>;
}

export const useLang = () => {
    const context = useContext(LangContext);
    return context;
  };
  
