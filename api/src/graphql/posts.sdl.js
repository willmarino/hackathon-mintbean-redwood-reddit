export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    userId: String!
    subredditId: Int!
    subreddit: Subreddit!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    postsBySubreddit(subredditId: Int!): [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    title: String!
    body: String!
    userId: String!
    subredditId: Int!
  }

  input UpdatePostInput {
    title: String
    body: String
    userId: String
    subredditId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
