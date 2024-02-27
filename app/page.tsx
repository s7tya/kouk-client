import { Form } from "./Form";

type RawPost = {
  id: string,
  body: string,
  author_id: string,
}

type RawUser = {
  id: string,
  screen_name: string,
  display_name: string,
}

type Post = {
  id: string,
  body: string,
  author: {
    id: string,
    display_name: string,
    screen_name: string,
  }
}

export default async function Home() {
  const raw_posts: RawPost[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`).then(res => res.json());
  const posts: Post[] = await Promise.all(raw_posts.map(async (raw_post) => {
    const raw_user: RawUser = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${raw_post.author_id}`).then(res => res.json())

    const post: Post = {
      id: raw_post.id,
      body: raw_post.body,
      author: {
        id: raw_user.id,
        display_name: raw_user.display_name,
        screen_name: raw_user.screen_name,
      }
    }

    return post
  }))

  return (
    <div className="p-4 flex flex-col gap-2">
      <Form />
      {posts.map((post) => (
        <div key={post.id}>
          <p><a href={`/users/${post.author.screen_name}`} className="flex gap-1 text-sm"><span className="font-bold">{post.author.display_name}</span><span>@{post.author.screen_name}</span></a></p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
