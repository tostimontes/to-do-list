const images = require.context("../media/images", true, /\.(jpeg|jpg|png|gif|svg)$/);

const importAllImages = (context) => {
  let images = {};
  context.keys().forEach((item) => {
    // Extract subdirectory path
    const pathParts = item.split("/");
    const fileName = pathParts.pop(); // Remove and store the file name
    const dirPath = pathParts.join("/").replace("./", ""); // Create a directory path

    // Initialize subdirectory array if not already initialized
    if (!images[dirPath]) {
      images[dirPath] = {};
    }

    // Add image to its respective subdirectory array
    images[dirPath][fileName] = context(item);
  });
  return images;
};

const allImages = importAllImages(images);

export default allImages;
