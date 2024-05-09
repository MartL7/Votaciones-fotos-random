export function saveLocalStorage ({ key, value }: { key: string, value: string}): void {
  return localStorage.setItem(key, value)
}

export function getLocalStorage ({ key }: { key: string }): string | null {
  return localStorage.getItem(key)
}

export function removeLocalStorage ({ key }: { key: string }): void {
  return localStorage.removeItem(key)
}