'use client'
import { useState } from 'react';
import './spinner.css'
import Image from 'next/image';

export default function Spinner({clickFunc, count}) {

    const [selected, setSelected] = useState(0);

    var desriptions = ["1", "2"]

    return (
        <div id = "body">
            <div className='slider h-fit' >
                {Array(count).fill(0).map(function(item, i){
                    return (
                    <span style = {{'--i' : i}} key = {i}>
                        <Image 
                        key = {i}
                        src='/Keyboard.jpg' 
                        alt = '' 
                        width = {3260/10}
                        height = {2293/10}
                        onClick={() => clickFunc(i)}/>
                    </span>)
                })
                }
            </div>
        </div>
    )

}
