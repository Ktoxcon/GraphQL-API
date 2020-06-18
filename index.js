const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
    type Query {
      info:String!,
      feed:[Link!]!,
      allLinks:[Link!]!
    }

    type Link {
      id:ID!,
      description:String!,
      url:String!
    }
    
`;

const links = [{
  id:"link-0",
  url:"http://localhost:4000",
  description:"Just another domain"
}]

const resolvers = {
  Query: {
    info: () => `This is the API of Hackernews Clone`,
    feed: () => links,
    allLinks: () => links
  },
  Link : {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log(`Server is running on https://localhost:4000`));
