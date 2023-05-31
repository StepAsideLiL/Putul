import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import H3 from "../../components/H3";
import { useLoaderData } from "react-router-dom";
import TabBodyFigure from "../../components/TabBodyFigure";

const ShopByCategories = () => {
  const { categoriesThree } = useLoaderData();

  return (
    <section className="my-10 space-y-5">
      <H3>Shop By Category</H3>

      <div>
        <Tabs className="text-center">
          <TabList>
            {categoriesThree.map((category) => (
              <Tab key={category._id}>{category.subcategory}</Tab>
            ))}
          </TabList>

          {categoriesThree.map((category) => (
            <TabPanel key={category._id}>
              <TabBodyFigure subcategory={category.subcategory} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ShopByCategories;
