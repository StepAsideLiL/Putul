import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLoaderData } from "react-router-dom";
import H3 from "../../components/H3";

const ImageMasonry = () => {
  const { figures } = useLoaderData();
  return (
    <div className="space-y-5" data-aos="fade-up">
      <H3>Our Product ShowCase</H3>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 12 }}>
        <Masonry>
          {figures.map((figure) => (
            <img key={figure._id} src={figure.picture} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImageMasonry;
