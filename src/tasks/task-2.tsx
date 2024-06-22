type MyComponentProps<T> = {
  items: T[]
  defaultItem: T
}
function MyComponent<T>(props: MyComponentProps<T>) { // если  стрелка, то поставить запятую в объявлении дженериковости
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={"9"} />
      <MyComponent items={users} defaultItem={{ name: 'JUST STRING', age: 40 }} />
    </>
  )
}

type User = {
  name: string
  age: number
}
