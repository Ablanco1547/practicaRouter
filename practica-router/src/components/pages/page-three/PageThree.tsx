import React from 'react'
import { LinkBtn } from '../../atoms/LinkBtn'
import { NavWrapper } from '../../molecules/NavWrapper'

export const PageThree = () => {
    return (
        <NavWrapper linkActual={'Tres'} link1={{ href: "/", name: "uno" }} link2={{ href: "Two", name: "dos" }}  ></NavWrapper>
    )
}
