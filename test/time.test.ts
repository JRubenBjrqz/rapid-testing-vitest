import { test, expect, vi } from 'vitest';

function getCurrentTime() {
    return new Date().toLocaleTimeString().slice(0, 5);
}

test('time', () => {
    vi.setSystemTime(new Date('2025-01-01T14:13:00'))
    expect(getCurrentTime()).toBe('14:13')

    vi.useRealTimers()
})