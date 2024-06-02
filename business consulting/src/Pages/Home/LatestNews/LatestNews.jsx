const LatestNews = () => {
  let newsData = null;
  const APIKey = "pub_45469feb2109afa8d167f127dfda431a22fea";
  const getTheNewsData = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${APIKey}&language=en`,
      );

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const data = await response.json();
      newsData = data.results;
      console.log(newsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  getTheNewsData();

  return (
    <div className="LatestNews">
      <p></p>
      <h1></h1>
      <div className="latestNews_cards grid grid-cols-3 grid-rows-1"></div>
    </div>
  );
};

export default LatestNews;
