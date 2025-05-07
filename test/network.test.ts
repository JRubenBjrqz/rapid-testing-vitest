import { test, expect, vi, afterAll, beforeAll } from 'vitest';
import { getPostBody } from '../src/network';

test('should fetch', async () => {
    const result = await getPostBody(1)

    expect(result).toMatchInlineSnapshot('Mocked for 1!')
})