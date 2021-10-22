import React from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:5000",
    cache: new InMemoryCache()
})

export default function App() {
    return (
        <div>
            <ApolloProvider client={client}>
                <Comp1 />
                {/* <Comp2 /> */}
            </ApolloProvider>
        </div>
    )
}
