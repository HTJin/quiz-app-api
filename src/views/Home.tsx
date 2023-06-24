import { useState, MouseEvent, FormEvent, ChangeEvent } from "react";
import PostForm from "../components/PostForm";

type Post = {
  id: number;
  title: string;
};

type HomeProps = {
  name: string;
  handleClick: (e: MouseEvent) => void;
};

export default function Home({ name, handleClick }: HomeProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({ id: 1, title: "" });

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setPosts([...posts, newPost]);
    setNewPost({ id: posts.length + 2, title: "" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.name, e.target.value);
    setNewPost({ ...newPost, title: e.target.value });
  };

  return (
    <>
      <h1>Hello {name.toUpperCase()}</h1>
      <button onClick={handleClick}>Log Out</button>
      <PostForm
        handleSubmit={handleFormSubmit}
        newPost={newPost}
        handleChange={handleInputChange}
      />
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
      <button onClick={() => {setPosts([])}}>Clear All Posts</button>
    </>
  );
}
