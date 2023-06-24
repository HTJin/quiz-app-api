import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import UserType from "../types/auth";
import { login } from "../lib/apiWrapper";

type LoginProps = {
  logUserIn: (user: UserType) => void;
};

export default function Login({ logUserIn }: LoginProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>({
    id: 1,
    username: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const response = await login(user.username, user.password!);
    if (response.error) {
      console.log(response.error);
    } else {
      localStorage.setItem("token", response.data?.token as string);
      localStorage.setItem(
        "tokenExp",
        response.data?.token_expiration as string
      );
      const firstNames = [
        "Kyle",
        "Megan",
        "Ally",
        "Jack",
        "Juan",
        "Jeremy",
        "Anna",
      ];
      const lastNames = [
        "Stuart",
        "Rojas",
        "Williams",
        "Smith",
        "Johnson",
        "McMulligan",
      ];
      const randomFirstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName =
        lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomEmail =
        randomFirstName[0].toLowerCase() +
        randomLastName.toLowerCase() +
        "@kekambas.org";

      logUserIn({
        ...user,
        firstName: randomFirstName,
        lastName: randomLastName,
        email: randomEmail,
      });
      navigate("/");
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={user.username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={user.password}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
