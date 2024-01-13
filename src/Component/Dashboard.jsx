import { Fragment } from "react"
import Menu from "./Menu"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
      <Fragment>
      <header className="fixed w-full shadow-lg bg-base-100 z-[0] ">
          <Menu />
        </header>
        <main className="flex">
          <section className="w-full">
            <Outlet />
          </section>
        </main>
      </Fragment>
  )
}

export default Dashboard