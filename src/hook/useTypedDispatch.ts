import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { tableActions } from "../store/slice/tableSlice"

const actions = {
  ...tableActions,
}

export const useTypedDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
