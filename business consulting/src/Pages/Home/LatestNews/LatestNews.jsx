import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_NEWS } from "../../../GraphQL/Queries";

// images:
import plainImage from "@/images/rightAdvice.png";

const LatestNews = () => {
  const { data: newsData, isLoading, error } = useQuery(GET_NEWS);
  const [newsItem, setNewsItem] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    if (newsData && newsData.getNews) setNewsItem(newsData.getNews);
  }, [newsData]); // Fetches the data

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setCardsPerPage(3);
      } else if (window.innerWidth < 769) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Handles the number of cards

  return (
    <div className="LatestNews flex w-screen justify-center bg-primary py-20 text-second">
      <div className="flex w-[1024px] flex-col items-center justify-center px-5">
        <p className="text-clamp-para">Business consulting</p>
        <h1 className="text-clamp-title font-bold">Latest news</h1>
        <div className="latestNews_cards grid grid-cols-1 grid-rows-3 md:grid-rows-1 place-items-center gap-x-5 gap-y-5 py-10 md:grid-cols-2 md:gap-y-0 lg:grid-cols-3">
          {newsItem &&
            newsItem.slice(0, cardsPerPage).map((item) => (
              <Link
                className="flex w-full flex-col items-center justify-between bg-white shadow-lg"
                key={item.id}
                // to={item.id.toString()}
              >
                <div className="card_image flex w-full h-[200px] items-center justify-center">
                  <img
                    className="size-full object-cover"
                    src={item.image_url ? item.image_url : plainImage}
                    alt="news_image"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-y-2 px-2 py-1">
                  <span className="text-sm text-gray-500">
                    {item.pubDate} / Business consulting
                  </span>
                  <h3 className="line-clamp-2 text-lg font-bold leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500">Read more...</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
