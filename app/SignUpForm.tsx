"use client"

import { create_user } from "./actions"

export const SignUpForm = () => {

  return (
    <form action={create_user} className="p-4 rounded bg-gray-50 flex flex-col items-start space-y-4">
      <div className="w-full">
        <label htmlFor="display_name" className="p-1 rounded text-sm font-bold">
          名前
        </label>
        <input name="display_name" placeholder="Example" className="p-1 rounded w-full" />
      </div>
      <div className="w-full">
        <label htmlFor="display_name" className="text-sm font-bold">
          ID
        </label>
        <input name="screen_name" placeholder="@example" className="p-1 rounded w-full" />
      </div>
      <button type="submit" className="px-4 py-1 bg-orange-500 rounded-full font-bold text-white self-center">Sign up</button>
    </form>
  )
}