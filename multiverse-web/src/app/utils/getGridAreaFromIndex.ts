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

export const getMaxLetter = (num: number) => alphabet[num]

const getGridAreaFromIndex = (index: number, maxLetter: string) => {
  return maxLetter
    ? alphabet[
        index %
          Math.floor(
            Math.min(
              alphabet.indexOf(maxLetter.toUpperCase()) + 1,
              alphabet.length,
            ),
          )
      ]
    : alphabet[index % alphabet.length]
}

export default getGridAreaFromIndex
