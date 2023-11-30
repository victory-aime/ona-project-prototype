import _, { DebouncedFunc } from 'lodash'

export function search(
  val: string,
  setSearchValue: (val: string) => void,
  delayedSearch: DebouncedFunc<any> | undefined,
  // setShowSpinner: (show: boolean) => void,
  requestData: (val: string) => void,
): DebouncedFunc<any> {
  setSearchValue(val)
  if (delayedSearch) delayedSearch.cancel()
  const delayFunc = _.debounce(
    () => {
      // setShowSpinner(true)
      //to avoid too fast animation of enable/disable spinner, we delay a little the request
      setTimeout(() => requestData(val), 100)
      delayedSearch = undefined
    },
    1000,
    { trailing: true },
  )
  delayFunc()
  return delayFunc
}

export function debouncedRequest(
  delayedRequest: DebouncedFunc<any> | undefined,
  requestData: (...ags: any[]) => void,
  requestArgs: any[],
): DebouncedFunc<any> {
  if (delayedRequest) delayedRequest.cancel()
  const delayFunc = _.debounce(() => requestData(...requestArgs), 800, {
    trailing: true,
  })
  delayFunc()
  return delayFunc
}
