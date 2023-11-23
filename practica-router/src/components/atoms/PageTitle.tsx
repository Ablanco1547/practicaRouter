import React from 'react';
import { useLinkContext } from '../../contexts/link'

interface IlinkNameProps {
    linkName: string,
}





export const PageTitle: React.FC<IlinkNameProps> = ({ linkName }) => {

    const LinkContext = useLinkContext();

    //USE EFFECT SIN DEPENDENCIAS ES DID MOUNT
    React.useEffect(() => {

        setTimeout(() => {
            LinkContext.setNombreLink('opacity-100 transition-opacity duration-200 ease-in-out')
        }, 400)


    }, [])


    return (
        <h1 className='font-bold text-5xl '>Esta es la página #<span className={LinkContext.nombreLink} >{linkName}</span></h1>
    )
}
