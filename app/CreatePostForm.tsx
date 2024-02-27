import { create_post } from "./actions"

export const CreatePostForm = () => {

  return (
    <form action={create_post}>
      <textarea name="body" />
      <button type="submit">Post</button>
    </form>
  )
}