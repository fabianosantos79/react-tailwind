import Header from "./components/Header/Header"
import ArticleList from "./components/ArticleList/ArticleList"
import { useState } from "react"
import Form from "./components/Form/Form"

const App = () => {
  const [user, setUser] = useState()

  const hasUser = Boolean(user)

  return (
    <>
      <Header user={user} />
      {user && <ArticleList />}
      {!user && <Form onSubmit={setUser} />}
    </>
  )
}

export default App