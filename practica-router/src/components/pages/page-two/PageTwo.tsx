import React from 'react'
import { LinkBtn } from '../../atoms/LinkBtn'
import { NavWrapper } from '../../molecules/NavWrapper'

export const PageTwo = () => {
    return (
        <NavWrapper linkActual={'Dos'} link1={{ href: "/", name: "uno" }} link2={{ href: "Three", name: "tres" }}  ></NavWrapper>
    )
}
