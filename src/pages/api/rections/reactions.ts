import type { APIRoute } from 'astro'
import { db, Reactions } from 'astro:db'
import { string, object, safeParse } from 'valibot'
import { getSession } from 'auth-astro/server'

const reactionSchema = object({
  reaction: string(),
  userReaction: string(),
})

export const POST: APIRoute = async ({ request }) => {
  const session = await getSession(request)
  
  if (!session || session?.user?.email == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  const { success, output } = safeParse(reactionSchema, await request.json())
  if (!success) return new Response('Bad request', { status: 400 })

  const { reaction, userReaction } = output

  const userId = session.user.id
  const newId = `${userId}-${userReaction}`

  const reactionObject = { id: newId, userId, reaction, userReaction }

  try {
    await db.insert(Reactions).values(reactionObject).onConflictDoUpdate({
      target: Reactions.id,
      set: reactionObject,
    })
  } catch (error) {
    console.error(error)
    return new Response('Error al insertar la reacción', { status: 500 })
  }

  return new Response('OK', { status: 200 })
}
