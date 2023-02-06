const getGridAreaFromIndex = (index: number, maxLetter: string | undefined) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  return maxLetter
    ? alphabet[
        index %
          Math.max(
            alphabet.indexOf(maxLetter.toUpperCase()) + 1,
            alphabet.length,
          )
      ]
    : alphabet[index % alphabet.length]
}

export default getGridAreaFromIndex
