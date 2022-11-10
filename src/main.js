// the way I'm using TS now means I have to use this code as a module and therefore have to export everything
export function setupCounter(element: HTMLButtonElement) {
    let counter = 0
    const setCounter = (count: number) => {
      counter = count
      element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}
