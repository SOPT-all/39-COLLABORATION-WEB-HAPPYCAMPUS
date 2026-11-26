const CHECKED_IDS_STORAGE_KEY = 'cart-checked-ids';

export const readCheckedIds = (): Set<number> => {
  try {
    const stored = localStorage.getItem(CHECKED_IDS_STORAGE_KEY);
    if (!stored) return new Set();

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return new Set();

    return new Set(parsed.filter((id): id is number => Number.isInteger(id)));
  } catch {
    return new Set();
  }
};

export const writeCheckedIds = (checkedIds: Set<number>) => {
  try {
    localStorage.setItem(
      CHECKED_IDS_STORAGE_KEY,
      JSON.stringify(Array.from(checkedIds)),
    );
  } catch {
    // 저장 실패 시 선택 상태는 메모리에서만 유지
  }
};
