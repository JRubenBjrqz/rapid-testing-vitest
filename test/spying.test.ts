import { test, expect, vi } from 'vitest'
import { greeting } from '../src'

test('greeting', () => {
    const spy = vi.spyOn(console, 'log')

    greeting('World')
    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith('Hello, World')

    greeting('Anthony')
    expect(spy).toBeCalledTimes(2)
    expect(spy).toBeCalledWith('Hello, Anthony')

    expect(spy).toMatchInlineSnapshot(`
        [MockFunction log] {
            "calls": [
                [
                    "Hello, Anthony"
                ]
            ],
            "results": [
                {
                    "type": "return",
                    "value": undefined
                }
            ]
        }
    `)
    
})