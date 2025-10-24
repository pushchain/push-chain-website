/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

async function fetchTweetMetrics(tweetId: string) {
  const url = `https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem/api/twitter/tweetMetrics?id=${tweetId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
}

export function useTweetMetrics(tweetId: string) {
  if (!ExecutionEnvironment.canUseDOM) {
    return {
      data: undefined,
      isLoading: true,
      error: null,
      isError: false,
      isSuccess: false,
      refetch: () => Promise.resolve({} as any),
    } as any;
  }

  return useQuery({
    queryKey: ['tweetMetrics', tweetId],
    queryFn: () => fetchTweetMetrics(tweetId),
    enabled: !!tweetId,
    staleTime: 1000 * 60,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
