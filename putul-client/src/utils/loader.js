const homeLoader = async () => {
  const cateRes = await fetch(
    "https://putul-server.vercel.app/v1/categories?limit=3"
  );
  const categoriesThree = await cateRes.json();

  const figuresRes = await fetch("https://putul-server.vercel.app/v1/figures");
  const figures = await figuresRes.json();

  const rateRes = await fetch(
    "https://putul-server.vercel.app/v1/figures/rating"
  );
  const ratingThree = await rateRes.json();

  return { categoriesThree, figures, ratingThree };
};

const allToyLoader = async () => {
  const figuresDataRes = await fetch(
    "https://putul-server.vercel.app/v1/figures"
  );
  const figuresData = await figuresDataRes.json();

  const totalFigureDataRes = await fetch(
    "https://putul-server.vercel.app/v1/total-figures"
  );
  const totalFigureData = await totalFigureDataRes.json();

  return { figuresData, totalFigureData };
};

export { homeLoader, allToyLoader };
