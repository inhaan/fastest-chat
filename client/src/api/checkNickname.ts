export const checkNicknameAsync = (
  chatRoomId: string,
  nickname: string
): Promise<boolean> => {
  return fetch(
    `/api/chat-rooms/${chatRoomId}/check-nickname?nickname=${nickname}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.available;
    })
    .catch((error) => {
      console.error("Failed to check nickname availability:", error);
      return false;
    });
};
