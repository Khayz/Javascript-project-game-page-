async function getData() {
  try {
    const resolveData = await fetch("games.json");
    return await resolveData.json(); // data
  } catch (error) {
    console.error({ message: error });
  }
}

export default getData;
