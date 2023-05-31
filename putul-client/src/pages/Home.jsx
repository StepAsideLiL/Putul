import AddYourToy from "../layouts/home/AddYourToy";
import Banner from "../layouts/home/Banner";
import ImageMasonry from "../layouts/home/ImageMasonry";
import ShopByCategories from "../layouts/home/ShopByCategories";
import TopRated from "../layouts/home/TopRated";
import useDynamicTitle from "../utils/useDynamicTitle";

const Home = () => {
  useDynamicTitle("Putul - Home");

  return (
    <div className="mb-32 mt-10 space-y-32">
      <Banner />

      <ImageMasonry />

      <ShopByCategories />

      <TopRated />

      <AddYourToy />
    </div>
  );
};

export default Home;
