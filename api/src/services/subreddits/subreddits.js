import { db } from 'src/lib/db'

export const subreddits = () => {
  return db.subreddit.findMany()
}

export const subreddit = ({ id }) => {
  return db.subreddit.findOne({
    where: { id },
  })
}

export const createSubreddit = ({ input }) => {
  return db.subreddit.create({
    data: input,
  })
}

export const updateSubreddit = ({ id, input }) => {
  return db.subreddit.update({
    data: input,
    where: { id },
  })
}

export const deleteSubreddit = ({ id }) => {
  return db.subreddit.delete({
    where: { id },
  })
}
