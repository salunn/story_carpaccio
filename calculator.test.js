import {describe, it, expect, vi} from 'vitest'
import { calculate } from './calculator'

describe('Calculator', () => {
    it('returns seven', () => {
        expect(calculate()).toBe(7)
    })
})