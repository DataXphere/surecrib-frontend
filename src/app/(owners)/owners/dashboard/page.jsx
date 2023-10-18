"use client"
import { OwnerContext } from "@/context/ownerContext"
import { useContext } from "react"

const OwnerDashboard = () => {
    const { owner } = useContext(OwnerContext)
  return (
    <div className="m-auto w-[90%]">Welcome {owner}, you are logged in!</div>
  )
}

export default OwnerDashboard