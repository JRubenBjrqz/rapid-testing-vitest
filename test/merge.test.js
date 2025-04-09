import { test, expect } from 'vitest'
import { deepMerge } from '../src'

test('shallow merge', () => {
    const merged = deepMerge(
        {
            name: 'Anthony',
        },
        {
            github: 'antfu',
        }
    )

    expect(merged).toEqual({
        name: 'Anthony',
        github: 'antfu',
    })
})

test('shallow merge', () => {
    const merged = deepMerge(
        {
            name: 'Anthony',
            github: 'unknown',
        },
        {
            github: 'antfu',
            twitter: 'antfu7',
        }
    )

    expect(merged).toEqual({
        name: 'Anthony',
        github: 'antfu',
        twitter: 'antfu7',
    })
})

test('shallow merge with arrays', () => {
    const merged = deepMerge(
        ['vue', 'react'],
        ['svelte', 'solid']
    )

    expect(merged).toEqual(['vue', 'react', 'svelte', 'solid'])
})

test.skip('deep merge with overlaps', () => {
    const merged = deepMerge(
        {
            name: 'Anthony',
            accounts: {
                github: 'unknown',
            },
        },
        {
            github: 'antfu',
            accounts: {
                twitter: 'antfu7',
            },
        }
    )

    expect(merged).toEqual({
        name: 'Anthony',
        accounts: {
            github: 'unkown',
            twitter: 'antfu7',
        },
    })
})

test('throws erros on mergin two different types', () => {
    expect(() => deepMerge(
        ['foo', 'bar'],
        { foo: 'bar'}
    )).toThrowError('Error: Can not merge two different types')
})