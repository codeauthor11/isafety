import { Spots } from "./mongodb";

export const getAllSpots = async () => {
  const spots = await (await Spots()).find({}).toArray();
  return spots;
};

export const createSpot = async (newSpot) => {
  const spot = await (await Spots()).insert(newSpot);
  return spot;
};