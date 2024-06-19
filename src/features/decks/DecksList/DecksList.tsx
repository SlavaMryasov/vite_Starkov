import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.css'
import { useFetchDecks } from './UseFetchDecks'

export const DecksList = () => {
  const { items } = useFetchDecks()

  return <ul className={s.list}>
    {items.map(item => <DeckItem key={item.id} deck={item} />)}
  </ul>
}
