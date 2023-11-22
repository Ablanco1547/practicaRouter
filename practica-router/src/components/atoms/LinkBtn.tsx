import React from 'react'
import { Ilink } from '../../models/Ilink'

interface ILinkProps {
    link: Ilink,
}


export const LinkBtn: React.FC<ILinkProps> = ({ link }) => {
    return (
        <a href={link.href} className='rounded-md inline-block p-2 m-3 bg-green-200 shadow-md'>Ir a la página {link.name}</a>)
}
