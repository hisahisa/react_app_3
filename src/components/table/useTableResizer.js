import { useCallback, useEffect, useState } from "react";

export const useTableResizer = (columns, tableRef) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const minCellWidth = 100;

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  // マウス移動処理
  const mouseMove = useCallback(
    (e) => {
      // テーブル左端の位置を取得（基準値）
      const tableLeft =
          tableRef?.current?.getBoundingClientRect().left;

      const gridColumns = columns?.map((col, i) => {
        if (i === activeIndex) {
          const width =
            e.clientX - tableLeft -
              (col.ref.current.offsetLeft - tableRef.current.scrollLeft);
          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current?.offsetWidth}px`;
      });

      if (tableRef?.current) {
        tableRef.current.style.gridTemplateColumns = `${gridColumns?.join(" ")}`;
      }
    },
    [activeIndex, columns, tableRef, minCellWidth]
  );

  // マウスアップ処理を useCallback で定義
  const mouseUp = useCallback(() => {
    setActiveIndex(null); // アクティブな列を解除
  }, []);

  // リスナー削除を useCallback で定義
  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", mouseUp);
  }, [mouseMove, mouseUp]);

  // イベントリスナーの登録とクリーンアップ
  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }
    // 初期化解除処理
    return () => {
      removeListeners()
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return { mouseDown };
};
