import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout.jsx", [
    index("routes/home/index.jsx"),
    route("games/:id", "routes/home/games-details.jsx"),
    route("collection", "routes/collections/index.jsx"),
    route("wishlist", "routes/wishlist/index.jsx"),
    // route("settings", "routes/settings/index.jsx"),
  ]),
];
