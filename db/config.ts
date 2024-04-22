import { column, defineDb } from 'astro:db'

const Votes = {
  columns: {
    id: column.text({ primaryKey: true }), // `userid-vote-id`
    userId: column.text(),
    category: column.text(),
    voteId: column.text(),
  }
}

// https://astro.build/db/config
export default defineDb({
  tables: { Votes, }
})
