import H3 from "../components/H3";
import MyFiguresTable from "../layouts/myToys/MyFiguresTable";
import useDynamicTitle from "../utils/useDynamicTitle";

const MyToys = () => {
  useDynamicTitle("Putul - My Toy");

  return (
    <div className="my-10 space-y-5">
      <H3>My Toys</H3>

      <MyFiguresTable />
    </div>
  );
};

export default MyToys;
