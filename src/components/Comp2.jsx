import React from 'react'
import { useQuery, gql } from '@apollo/client'

export default function Comp2() {
    const QUERY = gql`
    {   
        query GetIndividualData($id: 4){
            getIndividualData (id: $id) {
                id
                name
                age
            }
        } 
    }
    `

    const { data, loading, error } = useQuery(QUERY)

    if(loading)
        return <h1> Loading </h1>
    
    if(error)
        console.log(error);

    if(data)
        console.log(data);
    
    return (
        data &&
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}
