import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout.jsx", [
    index("routes/home/index.jsx"),
    route("games/:id", "routes/game-details/game-details.jsx", [
      index("routes/game-details/overview.jsx"),
      route("screenshots", "routes/game-details/screenshots.jsx"),
      route("shop-game", "routes/game-details/shop-game.jsx"),
    ]),
    route("collection", "routes/collections/index.jsx"),
    route("wishlist", "routes/wishlist/index.jsx"),
    // route("settings", "routes/settings/index.jsx"),
  ]),
];
