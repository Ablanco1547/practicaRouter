import React from 'react'
import { LinkBtn } from '../atoms/LinkBtn'
import { Ilink } from '../../models/Ilink'
import { PageTitle } from '../atoms/PageTitle'
import { useLinkContext } from '../../contexts/link'

interface ILinkProps {
    linkActual: string,
    link1: Ilink,
    link2: Ilink,
}



export const NavWrapper: React.FC<ILinkProps> = ({ linkActual, link1, link2 }) => {

    const linkContext = useLinkContext();



    //EL USE EFFECT CON UNA DEPENDENCIA ES DID UPDATE
    React.useEffect(() => {


        if (linkContext.nombreLink !== "opacity-0") {
            setTimeout(() => {
                linkContext.setOpacidadBtn('opacity-100 transition-opacity duration-200')
            }, 400)

        }


    }, [linkContext.nombreLink])



    return (
        <section className='bg-purple-100 h-96 flex flex-col justify-center items-center gap-16'>
            <PageTitle linkName={linkActual} />
            <div className={linkContext.opacidadBtn}>
                <LinkBtn link={link1} />
                <LinkBtn link={link2} />
            </div>

        </section>

    )
}
