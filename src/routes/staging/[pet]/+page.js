/** @type {import('./$types').PageLoad} */
export const load=({params}) => {
  console.log(params)
  return {
    pet: {
      name: 'hamster',
      count: 1
    }
  }
}