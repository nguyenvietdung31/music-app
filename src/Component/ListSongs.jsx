import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Songs } from '../Context'

export default function ListSongs() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setidSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(() => {
        setidSong(song.id)
    }, [song])


    return (
        <div className="col-span-2  overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className="text-left">Song name</th>
                        <th className="text-left">Author</th>
                        <th className='w-[10%]'>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            onClick={() => handlePlaySong(song.id)}
                            className={`bg-emerald-800 h-12 text-white hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-gray-400'}`}
                        >
                            <td className='text-center'>{index + 1}</td>
                            <td>{song.name}</td>
                            <td>{song.author}</td>
                            <td className='text-center'>
                                <a href={song.url}><i className='fa fa-download'></i></a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
