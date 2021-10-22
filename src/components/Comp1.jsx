import React from 'react'
import { useQuery, gql } from '@apollo/client'

export default function Comp1() {
    const QUERY = gql`
    {   
        getData {
            id
            name
            age
        }
    }
    `

    const { data, loading, error} = useQuery(QUERY)

    if(loading)
        return <h1> Loading... </h1>
    
    if(error)
        console.log(error);

    if(data)
        console.log(data);
    
    return (
        data &&
        <div>
            {
                data.map((d) => (
                    <h1 key={d.id}>{d.name}</h1> 
                )) 
            }
        </div>
    )
}
