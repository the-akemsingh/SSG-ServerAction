import revalidate from "./action/tags";
import test from "./action/test";

export default async function Home() {
  
  const todos = await test();
  revalidate();

  console.log("todo babe",todos);
  return (
    <div>
      {todos  ? (
        <div>
            <div >{todos.todo}</div> <br />
            <div >{todos.id}</div> <br />
            <div >{todos.userId}</div> <br />
        </div>
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}
