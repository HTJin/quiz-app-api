import { useState, MouseEvent, FormEvent, ChangeEvent } from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import PostType from "../types/post";

type HomeProps = {
  name: string;
  handleClick?: (e: MouseEvent) => void;
};

export default function Home({ name }: HomeProps) {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [newPost, setNewPost] = useState<PostType>({
    id: 1,
    title: "",
    body: "",
  });
  const [displayForm, setDisplayForm] = useState(false);

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setPosts([...posts, newPost]);
    setNewPost({ id: posts.length + 2, title: "", body: "" });
    setDisplayForm(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.name, e.target.value);
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Hello {name.toUpperCase()}</h1>
      <button
        onClick={() => {
          setDisplayForm(!displayForm);
        }}>
        {displayForm ? "Close X" : "Compose +"}
      </button>
      {displayForm && (
        <PostForm
          handleSubmit={handleFormSubmit}
          newPost={newPost}
          handleChange={handleInputChange}
        />
      )}
      {posts.map((p) => (
        <PostCard post={p} />
      ))}
      <button
        onClick={() => {
          setPosts([]);
        }}>
        Clear All Posts
      </button>
    </>
  );
}
