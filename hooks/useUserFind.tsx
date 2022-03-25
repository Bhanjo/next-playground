import useSWR from 'swr/immutable';
import axios from 'axios';

const useUserFind = (url: string) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // option으로 마운트, 포커싱, 에러시 리패치 비활성화
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    userInfo: data,
    isLoading: !error && !data,
    error,
  };
};

export default useUserFind;
