import {gql} from 'apollo-server-express';

export const typeDefs = gql`
type Listings {
    id:ID!
    title:String!
    image:String!
    address:String!
    price:Int!
    numOfGuests:Int!
    numOfBeds:Int!
    numOfBaths:Int!
    rating:Int!
} 
type Query {
    listings:[Listings!]!
}
type Mutation{ 
    deleteList(id:ID!):Listings!
}

`