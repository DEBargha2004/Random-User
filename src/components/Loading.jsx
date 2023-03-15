import React from 'react'
import { Skeleton } from '@mui/material';

function Loading() {
    let skel = []
    for (let i = 0; i < 22; i++) {
        skel.push(i)
    }
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='h-[150px] flex justify-center items-center mb-5 w-full'>
                <Skeleton
                    variant='rounded'
                    height={120}
                    className='w-[35%]'
                />
            </div>
            <div className='w-[90%] grid grid-cols-3 gap-4'>
                { skel.map(item=>(
                    <Skeleton 
                        variant='rounded'
                        height={80}
                        className='w-[100%]'
                        key={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Loading;