export const getImagesFromSource = async (perPage: number) => {
  const response = await fetch(
    `https://reqres.in/api/users?per_page=${perPage}`,
    {
      method: "GET"
    }
  );
  const data = await response.json();
  return data.data;
};
