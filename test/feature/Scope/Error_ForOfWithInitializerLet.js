// Options: --block-binding
// Error: :8:16: Unexpected token of

function* gen() {
  yield 1;
}

for (let i = 0 of gen()) {
}
