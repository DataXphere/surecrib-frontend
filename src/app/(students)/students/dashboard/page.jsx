"use client"
import { UserContext } from "@/context/studentContext"
import { useContext } from "react"

const StudentDashboard = () => {
    const { user } = useContext(UserContext)
  return (
    <div className="m-auto w-[90%]">Welcome {user}, you are logged in!</div>
  )
}

export default StudentDashboard