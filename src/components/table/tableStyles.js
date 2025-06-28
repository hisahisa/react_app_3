// カラムリサイズ用の<span>タグのスタイル
export const spanStyle = {
  display: "block",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(168,168,17,0.1)", // マウスホバー時の色
  width: "5px",
  cursor: "col-resize",
};

// テーブル自体のスタイル
export const tableStyle = {
  width: "auto",
  display: "grid",
  overflow: "auto",
  tableLayout: "fixed",
  flex: 1,
  borderCollapse: "collapse",
  "& thead, tbody, tr": {
    display: "contents",
  },
  "& thead th": {
    border: "1px solid #eeeeee",
    bgcolor: "primary.main",
    color: "primary.fontColor",
    height: "30px",
    p: 0,
    m: 0,
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    top: 0,
    position: "sticky",
    fontSize: "0.78rem",
    paddingLeft: "5px",
  },
  "& tbody td": {
    border: "1px solid #eeeeee",
    height: "30px",
    p: "0px 8px",
    wordWrap: "break-word",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "0.78rem",
    lineHeight: "30px",
    alignItems: "center",
  },
  "& tbody tr:hover > td": {
    backgroundColor: "#80d8ff",
    cursor: "pointer",
  },
};

/*
 ・ソート可能なテーブルヘッダーに適用するカスタムスタイル
 ・ホバー時やアクティブ状態の色のカスタマイズ
 ・ソートアイコン色変更  */
export const tableSortStyle = {
  "&.MuiTableSortLabel-root:hover": {
    color: "rgba(255, 255, 0, 1)",
  },
  "&.Mui-active": {
    color: "rgba(255, 255, 0, 1)",
  },
  "& .MuiTableSortLabel-icon": {
    color: "rgba(255, 255, 0, 1)  !important",
  },
};
