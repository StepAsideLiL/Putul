import H3 from "../components/H3";
import SearchField from "../layouts/allToys/SearchField";
import FiguresTable from "../layouts/allToys/FiguresTable";
import useDynamicTitle from "../utils/useDynamicTitle";

const AllToys = () => {
  useDynamicTitle("Putul - All Toys");

  return (
    <div className="my-10 space-y-5">
      <H3>All Toys</H3>

      <section className="mx-auto w-full md:w-3/4">
        <SearchField />
      </section>

      <section>
        <FiguresTable />
      </section>
    </div>
  );
};

export default AllToys;
