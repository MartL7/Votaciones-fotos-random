import { Categories, db } from 'astro:db'

import { Categories as CategoryId } from '@/logic/categories'

// https://astro.build/db/seed
export default async function seed() {
	const categories = CategoryId.map(({ id, name }) => ({ id, name }))
	await db.insert(Categories).values(categories)
}
