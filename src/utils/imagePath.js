// Helper function to get correct image paths for both development and production
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  // Use PUBLIC_URL for GitHub Pages compatibility
  return `${process.env.PUBLIC_URL}/${cleanPath}`;
};
