import type { MetaFunction } from "@remix-run/node";
import { Container } from "~/components/Container";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Container>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Container>
  );
}
