import { useState } from 'react';
import { useNavigate } from 'react-router';

import CartEntry from '@domains/cart/components/cart-entry/cart-entry';
import type { DefaultCategoryType } from '@shared/constants/default-category';
import { ROUTE_PATH } from '@shared/constants/path';

interface AddToCartProps {
  category: DefaultCategoryType;
}

const AddToCart = ({ category }: AddToCartProps) => {
  const navigate = useNavigate();

  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [isFolderSelectModalOpen, setIsFolderSelectModalOpen] =
    useState<boolean>(false);

  const navigateToCompare = () => {
    void navigate({
      pathname: ROUTE_PATH.CART,
      search: '?view=compare',
    });
  };

  const handleAddToCart = () => {
    if (
      isInCart &&
      !confirm('이미 담긴 자료입니다. 다른 폴더에 추가하시겠어요?')
    ) {
      return;
    }

    setIsInCart(true);
    setIsFolderSelectModalOpen(true);
  };

  const handleCompareLinkClick = () => {
    if (isInCart) {
      navigateToCompare();
    } else {
      handleAddToCart();
    }
  };

  return (
    <CartEntry
      onAddToCartClick={handleAddToCart}
      onLinkClick={handleCompareLinkClick}
    />
  );
};

export default AddToCart;
