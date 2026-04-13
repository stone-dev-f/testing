export default async function fetchTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  console.log("🚀 ~ fetchTodo ~ res:", res);

  return res.json();
}
