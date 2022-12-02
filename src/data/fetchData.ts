const fetchData = async (day: number) => {
    const { default: url } = await import(`./day${day}.txt`);
    const response = await fetch(url);
    const text = await response.text();
    return text;
};
export default fetchData;
