import { column, defineDb } from 'astro:db'

const Categories = {
  columns: {
    id: column.text({ primaryKey: true }), // category-id
  }
}

const Votes = {
  columns: {
    id: column.text({ primaryKey: true }), // `userid-vote-id`
    userId: column.text(),
    category: column.text({ references: () => Categories.columns.id }),
    voteId: column.text(),
  }
}

const Reactions = {
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text(),
    reaction: column.text({ optional: true }),
    userReaction: column.text(),
  }
}

const Comments = {
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text(),
    comment: column.text({ optional: true }),
    userComment: column.text(),
    codeGif: column.text({ optional: true }),
  }
}

// https://astro.build/db/config
export default defineDb({
  tables: { 
    Votes, 
    Categories,
    Reactions,
    Comments
  }
})
