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

const Reaction = {
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text(),
    reaction: column.text(),
    userReaction: column.text(),
  }
}

// https://astro.build/db/config
export default defineDb({
  tables: { 
    Votes, 
    Categories,
    Reaction
  }
})
