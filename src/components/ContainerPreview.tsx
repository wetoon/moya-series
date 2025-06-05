
import React from 'react'
import Card from '@package/components/Card'
import type { MetadataTypes } from '@package/app/page'

export default function ContainerPreview({ metadata }:{ metadata: MetadataTypes[] }) {
    return (
        <figure className='grid gap-3 md:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            { metadata.map( (item,i) => <Card key={i} source={ item } /> ) }
        </figure>
    )
}
