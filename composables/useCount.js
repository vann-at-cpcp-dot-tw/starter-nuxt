import { useState } from '#app'

export const useCount = () => {
  return useState('count', () => 0)
}