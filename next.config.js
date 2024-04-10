const path = require("path");

module.exports = {
  output: "export",
  distDir: "docs",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
};
