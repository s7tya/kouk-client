import { create_post } from "./actions"

export const CreatePostForm = () => {

  return (
    <form action={create_post} className="flex flex-col gap-2 items-end rounded bg-gray-50 p-2">
      <textarea name="body" placeholder="いまどうしてる？" className="border rounded p-2 w-full" />
      <button type="submit" className="px-4 py-1 bg-orange-500 rounded-full font-bold text-white">Post</button>
    </form>
  )
}