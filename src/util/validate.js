export function isvalidUsername (str) {
  return true
}

export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
