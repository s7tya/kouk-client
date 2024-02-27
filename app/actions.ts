"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export const create_post = async (input: FormData) => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookies().get("kouk_token")?.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: input.get("body"),
      screen_name: cookies().get("kouk_screen_name")?.value,
    })
  })

  revalidatePath("/")
}

export const create_user = async (input: FormData) => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      screen_name: input.get("screen_name")!,
      display_name: input.get("display_name")!,
    })
  })

  resp.headers.getSetCookie()[0].split("; ").forEach((cookie) => {
    const [key, value] = cookie.split("=");
    cookies().set(key, value)
  })
}