import Hello from "./components/hello";



export default function Home() {
  console.log("I am server component");
  return (
    <>
      <h1 className="text-3xl">Welcome to next!</h1>
      <Hello />
    </>
  );
}
