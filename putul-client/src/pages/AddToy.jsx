import H3 from "../components/H3";
import AddToyForm from "../layouts/addToy/AddToyForm";
import useDynamicTitle from "../utils/useDynamicTitle";

const AddToy = () => {
  useDynamicTitle("Putul - Add a Toy");

  return (
    <div className="my-10 space-y-5">
      <H3>Add A Toy</H3>

      <AddToyForm />
    </div>
  );
};

export default AddToy;
