import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "teste@teste.com.br",
    password: "123456",
    techs: ["Node", "React", { title: "Java", experience: 100 }],
  });
  return response.json({ message: "Hello World" });
}
