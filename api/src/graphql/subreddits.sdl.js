export const schema = gql`
  type Subreddit {
    id: Int!
    title: String!
    createdAt: DateTime!
  }

  type Query {
    subreddits: [Subreddit!]!
    subreddit(id: Int!): Subreddit!
  }

  input CreateSubredditInput {
    title: String!
  }

  input UpdateSubredditInput {
    title: String
  }

  type Mutation {
    createSubreddit(input: CreateSubredditInput!): Subreddit!
    updateSubreddit(id: Int!, input: UpdateSubredditInput!): Subreddit!
    deleteSubreddit(id: Int!): Subreddit!
  }
`
