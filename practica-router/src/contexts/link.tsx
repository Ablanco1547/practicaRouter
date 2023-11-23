import React from 'react';

export interface LinkContextProps {
    nombreLink: string,
    opacidadBtn: string,

    setNombreLink: React.Dispatch<React.SetStateAction<string>>,
    setOpacidadBtn: React.Dispatch<React.SetStateAction<string>>,


}

const LinkContext = React.createContext<LinkContextProps>({

    nombreLink: '',
    opacidadBtn: '',
    setNombreLink: () => { },
    setOpacidadBtn: () => { },

})





export const LinkContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {


    const [nombreLink, setNombreLink] = React.useState('opacity-0');

    const [opacidadBtn, setOpacidadBtn] = React.useState('opacity-0');






    const contextValue = React.useMemo(
        () => ({
            nombreLink, setNombreLink, opacidadBtn, setOpacidadBtn
        }),
        [nombreLink, setNombreLink, opacidadBtn, setOpacidadBtn]);



    return <LinkContext.Provider value={contextValue}>

        {children}


    </LinkContext.Provider>
};


//DESDE AQUI ESTAMOS CREANDO EL USE CONTEXT ENTONCES LO QUE PASA ES QUE ESPORTAMOS EL USE CONTEXT COMO UN OBJETO CON TODOS LOS ESTADOS YA ADENTRO NADA MAS DE CONSUMIRLOS COMO CONTEXT.ALGO

export const useLinkContext = () => React.useContext<LinkContextProps>(LinkContext);
