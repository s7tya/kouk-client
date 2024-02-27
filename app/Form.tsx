"use client"

import { CreatePostForm } from "./CreatePostForm"
import { SignUpForm } from "./SignUpForm"

export const Form = () => {
  return (<>
    {document.cookie.split("; ").some((item) => {
      return item.trim().indexOf("kouk_token") == 0
    }) ?
      <CreatePostForm /> :
      <SignUpForm />
    }
  </>)
}