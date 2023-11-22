import React from 'react'

interface IlinkNameProps {
    linkName: string,
}





export const PageTitle: React.FC<IlinkNameProps> = ({ linkName }) => {
    return (
        <h1 className='font-bold text-5xl'>Esta es la página #{linkName}</h1>
    )
}
