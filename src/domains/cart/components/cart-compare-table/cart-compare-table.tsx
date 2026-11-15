import Badge from '@domains/cart/components/badge/badge';
import CartCompareHeaderCell from '@domains/cart/components/cart-compare-header-cell/cart-compare-header-cell';
import type { BadgeType } from '@domains/cart/constants/badge';
import type { CartItem } from '@domains/cart/types/cart-compare';

import { COMPARE_ROWS, type CompareRow } from './cart-compare-rows';

import * as styles from './cart-compare-table.css';

const LABEL_COLUMN_WIDTH = 108;
const ITEM_COLUMN_MIN_WIDTH = 206;

interface CartCompareTableProps {
  items: CartItem[];
  badges: Map<number, BadgeType[]>;
  checkedIds: Set<number>;
  onCheckedChange: (cartItemId: number, checked: boolean) => void;
  onHide: (cartItemId: number) => void;
}

const CartCompareTable = ({
  items,
  badges,
  checkedIds,
  onCheckedChange,
  onHide,
}: CartCompareTableProps) => {
  const isEmpty = items.length === 0;
  const gridTemplateColumns = isEmpty
    ? `${LABEL_COLUMN_WIDTH}px 1fr`
    : `${LABEL_COLUMN_WIDTH}px repeat(${items.length}, minmax(${ITEM_COLUMN_MIN_WIDTH}px, 1fr))`;
  const minWidth = LABEL_COLUMN_WIDTH + ITEM_COLUMN_MIN_WIDTH * items.length;
  const rowCount = COMPARE_ROWS.length + 1;

  const getBadge = (row: CompareRow, cartItemId: number) => {
    if (!row.badge) return null;
    return badges.get(cartItemId)?.includes(row.badge) ? row.badge : null;
  };

  return (
    <div className={styles.scroller}>
      <div
        role="table"
        className={styles.table}
        style={{ gridTemplateColumns, minWidth }}
      >
        {isEmpty && (
          <div role="row" className={styles.row}>
            <div
              role="cell"
              className={styles.emptyCell}
              style={{ gridRow: `1 / span ${rowCount}` }}
            >
              비교할 자료를 모두 숨겼어요.
              <br />
              초기화를 누르면 다시 볼 수 있어요.
            </div>
          </div>
        )}

        <div role="row" className={styles.row}>
          <div role="rowheader" className={styles.labelCell}>
            비교 항목
          </div>
          {items.map((item) => (
            <div
              role="cell"
              key={item.cartItemId}
              className={styles.valueCell.header}
            >
              <CartCompareHeaderCell
                title={item.title}
                coverImageUrl={item.coverImageUrl}
                checked={checkedIds.has(item.cartItemId)}
                onCheckedChange={(checked) =>
                  onCheckedChange(item.cartItemId, checked)
                }
                onHide={() => onHide(item.cartItemId)}
              />
            </div>
          ))}
        </div>

        {COMPARE_ROWS.map((row) => (
          <div role="row" key={row.id} className={styles.row}>
            <div role="rowheader" className={styles.labelCell}>
              {row.label}
            </div>
            {items.map((item) => {
              const badge = getBadge(row, item.cartItemId);

              return (
                <div
                  role="cell"
                  key={item.cartItemId}
                  className={styles.valueCell[row.cell]}
                >
                  {row.render(item)}
                  {badge && <Badge type={badge} />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartCompareTable;
