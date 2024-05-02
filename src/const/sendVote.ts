import { $, $$ } from '@/lib/dom-selector'
import { toastAlert } from '@/function/alerts'

export function sendVote(nameImage: string) {
  const $images = $$(`.${nameImage}`) as NodeListOf<HTMLImageElement>
  const $votes = $('p[data-votes]') as HTMLParagraphElement

  const { votes } = $votes.dataset
  const userVotes = votes.split(',')

  const limitVotesForMemes = 3
  const limitVotesForTeachers = 2

  $images.forEach(($image) => {

    $image.onclick = async () => {
      const { voteId } = $image.dataset
      const category = $image.dataset.category ?? `category-${$image.dataset.url.split('/').at(-2).toLowerCase()}`

      const votesForMemes = userVotes.filter((vote) => vote.includes('Meme')).length
      const votesForTeachers = userVotes.filter((vote) => vote.includes('teacher')).length

      if (userVotes.includes(voteId)) {
        toastAlert({ title: 'Ya has votado por este mismo', type: 'error', icon: true, dismissible: false, location: 'bottom-center' })
        return
      }

      if (category === 'category-memes' && votesForMemes >= limitVotesForMemes) {
        toastAlert({ title: 'Ya has votado por 3 memes', type: 'error', icon: true, dismissible: false, location: 'bottom-center' })
        return
      }

      if (category === 'category-teachers' && votesForTeachers >= limitVotesForTeachers) {
        toastAlert({ title: 'Ya has votado por 2 profesores', type: 'error', icon: true, dismissible: false, location: 'bottom-center' })
        return
      }

      const dataToSend = {
        voteId: voteId,
        category: category
      }

      const response = await fetch('/api/memes/votes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      })

      if (!response.ok) {
        toastAlert({ title: 'Error al votar', type: 'error', icon: true, dismissible: false, location: 'bottom-center' })
        return 
      } else {
        toastAlert({ title: 'Voto realizado', type: 'success', icon: true, dismissible: true, location: 'bottom-center' })
        location.reload()
      }
    }
  })
}