import { useQuery } from '@tanstack/react-query';
import { getAllCartList } from '../apis/Cart';

export default function useCart() {
  const getCarts = useQuery({
    queryKey: ['carts'],
    queryFn: getAllCartList,
  });

  return {getCarts}
}

