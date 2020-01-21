import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { expect } from 'chai'

global.jestExpect = global.expect
global.expect = expect
