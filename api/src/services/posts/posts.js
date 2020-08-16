import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}


export const postsBySubreddit = ({ subredditId }) => {
  return db.post.findMany({
    where: { subredditId: subredditId }
  })
}

export const post = ({ id }) => {
  return db.post.findOne({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  console.log(input);
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  subreddit: (_obj, { root }) =>
    db.post.findOne({ where: { id: root.id } }).subreddit(),
}
