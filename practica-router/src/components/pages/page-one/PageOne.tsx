import React from 'react'
import { LinkBtn } from '../../atoms/LinkBtn'
import { NavWrapper } from '../../molecules/NavWrapper'

export const PageOne = () => {


    return (
        <NavWrapper linkActual={'Uno'} link1={{ href: "Two", name: "dos" }} link2={{ href: "Three", name: "tres" }}  ></NavWrapper>
    )
}
