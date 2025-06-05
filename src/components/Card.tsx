
import React from 'react'
import Link from 'next/link'
import type { MetadataTypes } from '@package/app/page'

export default function Card( { source }: { source: MetadataTypes } ) {
    return (
        <figcaption className='pb-2 mx-auto'>
            <Link href={ "/" + source.id }>
                <img src={ source.image } alt={ source.id }></img>
                <article className='p-2'>
                    <p className='line-clamp-2 text-ellipsis max-h-[54px] overflow-hidden'>{ source.title }</p>
                </article>
            </Link>
        </figcaption>
    )
}
