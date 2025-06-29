import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import StoreIcon from "@mui/icons-material/Store";

export const DRAWER_WIDTH = 240;

// メニュー項目のリスト
export const MENU_ITEMS = [
  { to: "/", icon: <HomeIcon />, text: "トップページ" },
  { to: "/users", icon: <PeopleIcon />, text: "ユーザー一覧" },
  { to: "/items", icon: <ViewInArIcon />, text: "商品一覧" },
  { to: "/stores", icon: <StoreIcon />, text: "店舗一覧" },
];
