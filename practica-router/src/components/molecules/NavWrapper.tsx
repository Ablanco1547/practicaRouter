import React from 'react'
import { LinkBtn } from '../atoms/LinkBtn'
import { Ilink } from '../../models/Ilink'
import { PageTitle } from '../atoms/PageTitle'

interface ILinkProps {
    linkActual: string,
    link1: Ilink,
    link2: Ilink,
}



export const NavWrapper: React.FC<ILinkProps> = ({ linkActual, link1, link2 }) => {
    return (
        <section className='bg-purple-100 h-96 flex flex-col justify-center items-center gap-16'>
            <PageTitle linkName={linkActual} />
            <div>
                <LinkBtn link={link1} />
                <LinkBtn link={link2} />
            </div>

        </section>

    )
}
