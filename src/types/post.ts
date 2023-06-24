import UserType from "./auth";

type PostType = {
  id?: number;
  title: string;
  body: string;
  author?: UserType;
  dataCreated?: string;
  imageURL?: string;
};

export default PostType;
