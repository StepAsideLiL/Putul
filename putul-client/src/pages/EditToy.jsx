import { useContext } from "react";
import H3 from "../components/H3";
import EditToyForm from "../layouts/EditToy/EditToyForm";
import { MyToyEditDataContext } from "../providers/MyToyEditDataProvider";
import useDynamicTitle from "../utils/useDynamicTitle";

const EditToy = () => {
  useDynamicTitle("Putul - Edit Toy");

  const { figure } = useContext(MyToyEditDataContext);

  const { toyName } = figure;

  return (
    <div>
      <H3>Edit Toy: {toyName}</H3>

      <EditToyForm />
    </div>
  );
};

export default EditToy;
