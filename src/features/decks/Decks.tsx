import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { useAppSelector } from '../../app/store.ts'
import { LinearLoader } from '../../common/components/Loader/LinearLoader.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
      <footer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa esse repellat dicta vel
        exercitationem quae fuga et nemo. Error, eligendi a fugiat officiis distinctio rerum cumque culpa
        doloribus odit!
      </footer>
    </div>
  )
}
