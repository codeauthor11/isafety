import { createSpot, getAllSpots } from "../../lib/spots";

export const get = async () => {
  const spots = await getAllSpots();
  if (!spots) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  return new Response(JSON.stringify(spots), {
    status: 200,
  });
};

export const post = async ({ request }) => {
  const newSpot = await request.json();
  const spot = await createUser(newSpot);
  return new Response(JSON.stringify(spot), {
    status: 200,
  });
};