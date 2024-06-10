// video player css
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

// media player components
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

// images
import blank from "@/images/rightAdvice.png";

const ThrivingBusiness = () => {
  return (
    <div className="ThrivingBusiness flex w-screen flex-col items-center justify-center py-20">
      <div className="w-full max-w-[1024px] px-5 md:text-center">
        <p className="text-clamp-para">BUSINESS CONSULTING</p>
        <h1 className="text-clamp-title font-bold">
          A business that thrives on the knowledge <br /> and insight of the leaders
        </h1>
        <MediaPlayer
          className="my-10"
          posterLoad="visible"
          load="play"
          title="business consulting"
          src="https://www.youtube.com/watch?v=xIIJfmDnvPE"
          playsInline
          aspectRatio="16/9"
          storage="storage-key"
          viewType="video"
          poster={blank}
          logLevel="warn"
          crossOrigin
        >
          <MediaProvider>
            <Poster className="vds-poster" />
          </MediaProvider>
          <DefaultVideoLayout thumbnails={blank} icons={defaultLayoutIcons} />
        </MediaPlayer>
        <div className="text flex md:flex-row flex-col justify-between text-start items-start gap-x-10">
          <p className="line-clamp-4 text-clamp-para">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada
            curabitur vel interdum leo justo at ultricies. Sit aliquet tempus
            elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet
            sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius
            felis. Risus aliquam aliquam consequat habitant. Id elit turpis amet
            vel at sapien. Massa tempus augue lobortis enim quam consectetur
            dictum. Elementum id tortor venenatis lectus sed. Adipiscing nisi
            felis aliquam nunc. Quis et sed ac urna augue feugiat mi eget.{" "}
          </p>
          <p className="line-clamp-3 text-clamp-para">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada
            curabitur vel interdum leo justo at ultricies. Sit aliquet tempus
            elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet
            sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius
            felis. Risus aliquam aliquam consequat habitant. Id elit turpis amet
            vel at sapien. Massa tempus augue lobortis enim quam consectetur
            dictum. Elementum id tortor venenatis lectus sed. Adipiscing nisi
            felis aliquam nunc. Quis et sed ac urna augue feugiat mi eget.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThrivingBusiness;
