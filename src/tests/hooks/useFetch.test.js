import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Test for useFetch', () => {
  test('should handle the error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://app.netlify.com/sites/unrivaled-sopapillas-d4720c')
    );
    await waitForNextUpdate(1000);

    const { data, loading, error } = result.current;

    expect(data).toStrictEqual([]);
    expect(loading).toBe(false);
    expect(error).not.toBe(null);
  });

  test('should return the default information', () => {
    const { result } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );

    const { data, loading, error } = result.current;
    expect(data).toStrictEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('should have the following information: loading false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/2')
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
});
