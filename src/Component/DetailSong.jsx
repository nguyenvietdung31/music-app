import React, { useContext } from 'react'
import { Songs } from '../Context'
import Playing from './Playing'

export default function DetailSong() {
    const { song } = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-white	 font-bold text-center'>Now playing</h2>
            <h2 className='text-white	 text-2xl text-center'>{song.name}</h2>
            <div className='w-[240px] m-auto mt-10'>
                <img alt='' src={song.links.images[0].url} className='w-full' />
            </div>

            <div className='flex justify-center items-center mt-10'>
                <img alt='' src={song.links.images[1].url} className='w-[70px] rounded-full' />
                <span className='text-xl text-white'>{song.author}</span>
            </div>
            <div className='mt-10'><Playing/></div>
            
        </div>
    )
}
