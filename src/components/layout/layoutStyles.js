// カラムリサイズ用の<span>タグのスタイル
export const layoutStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: (theme) =>
  theme.palette.mode === "light"
    ? theme.palette.grey[100]
    : theme.palette.grey[900],
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
  position: 'relative'
};

// Container レイアウトスタイル
export const containerStyles = {
  mt: 4,
  mb: 4,
  flexGrow: 1,
};
