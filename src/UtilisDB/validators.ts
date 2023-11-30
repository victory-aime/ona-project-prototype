export const handleValidEmail = (val: string): boolean => {
  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/

  return val.length > 0 && reg.test(val)
}
export const handleName = (val: string): boolean => {
  let reg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

  return val.length > 0 && reg.test(val)
}
