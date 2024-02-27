"use client"

import { create_user } from "./actions"

export const SignUpForm = () => {

  return (
    <form action={create_user}>
      <input name="display_name" placeholder="Example" />
      <input name="screen_name" placeholder="@example" />
      <button type="submit">Sign up</button>
    </form>
  )
}