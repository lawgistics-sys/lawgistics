export async function POST(req: Request) {
  const { query } = await req.json();

  const res = await fetch("https://lawgistic.onrender.com/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();

  return Response.json(data);
}
