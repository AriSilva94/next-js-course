const BASE_GAME_IMAGE_URL =
  "https://github.com/emersonbroga/nintendo-64-games/blob/main/images/";

export const getGameImage = (image: string) => {
  return `${BASE_GAME_IMAGE_URL}${image}?raw=true`;
};
