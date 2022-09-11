import { AppProps } from "next/app"
import { useEffect, useState } from "react"
import { Breadcrumb } from "react-bootstrap"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import styles from "../styles/layouts/Dashboard.module.scss"

interface Props {
  children: React.ReactNode
}

const LOCAL_STORAGE_KEY = 'isSidebarOpen'

const useSidebar = () => {
  const persistedState =
    typeof window === 'undefined'
      ? false
      : localStorage.getItem(LOCAL_STORAGE_KEY) === 'true'

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(value => !value)

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isOpen))
  }, [isOpen])

  // Rehydrate with persisted data
  useEffect(() => {
    setIsOpen(persistedState)
  }, [persistedState])

  return { isOpen, toggle }
}

const Dashboard = ({ children }: Props) => {
  
  const { isOpen, toggle } = useSidebar()

  return (
    <div className={ styles.wrapper }>
      <Sidebar isOpen={ isOpen } ></Sidebar>
      <div className={ styles.contentWrapper }>
        <Header toggle={ toggle }></Header>
        <Breadcrumb></Breadcrumb>
        { children }
      </div>
    </div>
  )
}

export default Dashboard