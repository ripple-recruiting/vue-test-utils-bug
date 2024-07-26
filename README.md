# vue-test-utils-bug

This is a minimal reproduction of the typescript issues happening with vue test-utils

## Installation

1. `git clone https://github.com/ripple-recruiting/vue-test-utils-bug.git`
1. `cd vue-test-utils-bug`
1. `npm ci`

## Seeing the TypeScript errors

1. npm run typecheck

## Errors I'm seeing

components/CoolMessage.spec.ts:13:28 - error TS2339: Property 'message' does not exist on type '{}'.

13 expect(wrapper.props().message).toBeTruthy();
~~~~~~~

Found 1 error in components/CoolMessage.spec.ts:13

## Expected Output

No errors, or a solveable error. Upgrading from `@vue/test-utils` v2.0.0 rc caused this issue.
No TS errors as high as 2.3 but errors begin at 2.4.
