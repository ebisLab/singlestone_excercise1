import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {mock} from '../mock'

export default function Steps() {
    const [data, setData]=useState()

    useEffect(() => {
        axios.get(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))

    }, [])

const filter_through=()=>{
    let sort_data= data.sort((a,b)=>(a.stepNumber - b.stepNumber))
    let map_the_data= sort_data.map(item=>{

        let is_it_there=item.versionContent.map(thing=>thing)
        if(is_it_there.length >2){
        return (
        <div className="filter_section" data-testid={`steps-${is_it_there[1].id}`} key={is_it_there[1].id}>
            <h3>0{item.stepNumber}</h3>
            <h4>{is_it_there[1].title}</h4>
            <p>{is_it_there[1].body} </p>
        </div>
        )}
        
        else {
            return (
                <div className="filter_section" data-testid={`steps-${is_it_there[0].id}`} key={is_it_there[0].id}>
                <h3>0{item.stepNumber}</h3>
                <h4>{is_it_there[0].title}</h4>
                <p>{is_it_there[0].body} </p>
            </div>
        )}

    })
    return map_the_data
}


    return (
        <>
        <section data-testid="steps-1" className="static section2">
        <div className="section2_centered">
<h2 className="how_it_works">How It works</h2>
<div className="filter_container">
    {data && filter_through()}
</div>
        
        </div> 
      </section>
        </>
    )
}
