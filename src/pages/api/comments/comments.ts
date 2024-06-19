import type { APIRoute } from 'astro'
import { db, Comments } from 'astro:db'
import { getSession } from 'auth-astro/server'

interface Comment {
  comment?: string
  userComment: string
  codeGif?: string
}

export const POST: APIRoute = async ({ request }) => {
  const session = await getSession(request)

  const { id, name } = session.user

  if (!session || session?.user?.email == null) {
    return new Response("Unauthorized", { status: 401 })
  }

  const { comment, userComment, codeGif } = await request.json() as Comment

  console.log(comment, userComment, codeGif)

  const userId = `${name}-${id}`
  const newId = `${id}-${userComment}`

  const commentToSend = { id: newId, userId, comment, userComment, codeGif }

  try {
    await db.insert(Comments).values(commentToSend)

  } catch(error) {
    console.error(error)
    return new Response('Error al Subir el Comentario', { status: 500 })
  }

  return new Response('OK', { status: 200 })
}