import Link from 'next/link'
import { Models } from 'node-appwrite'
import React from 'react'
import Thumbnail from './Thumbnail'

const Card = ({file}: {file: Models.Document}) => {
  return (
    <Link href={file.url} target='_blank' className='file-card'>

        <div className='flex justify-between'>
            <Thumbnail 
                type={file.type} 
                extension={file.extensison} 
                url={file.url}
                className='!size-20'
                imageClassName='!size-21'
            />
        </div>


        {file.name}
    </Link>
  )
}

export default Card