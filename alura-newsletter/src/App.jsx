import Header from "./components/Header/Header"
import ArticleList from "./components/ArticleList/ArticleList"
import { useState } from "react"

const App = () => {
  const [user, setUser] = useState(false)
  //const hasUser = user

  return (
    <>
      <Header />
      {user && <ArticleList />}
    </>
  )
}

export default App