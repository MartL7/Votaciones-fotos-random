import type { APIRoute } from 'astro'
import { Votes, db } from 'astro:db'
import { string, object, safeParse } from 'valibot'
import { getSession } from 'auth-astro/server'

const voteSchema = object({
  category: string(),
  voteId: string(),
})

export const POST: APIRoute = async ({ request }) => {
  const session = await getSession(request)

  if (!session || session?.user?.email == null) {
		return new Response("Unauthorized", { status: 401 })
	}

  const { success, output } = safeParse(voteSchema, await request.json())
  if (!success) return new Response('Bad request', { status: 400 })

  const { category, voteId } = output

  const userId = session.user.email
  const newId = `${userId}-${voteId}`

  const vote = { id: newId, userId, category, voteId }

  try {
    await db.insert(Votes).values(vote)
  } catch(error) {
    console.error(error)
    return new Response('Error al insertar el Voto', { status: 500 })
  }

  return new Response('OK', { status: 200 })
}