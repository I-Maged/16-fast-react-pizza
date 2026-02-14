import Button from "../../ui/Button"
import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch()

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  )
}

export default DeleteItem
