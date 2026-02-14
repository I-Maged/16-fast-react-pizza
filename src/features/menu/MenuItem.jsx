import { formatCurrency } from "../../utils/helpers"
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux"
import { addItem, getCurrentQuantityById } from "../cart/cartSlice"
import DeleteItem from "../cart/DeleteItem"

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  const currentQuantity = useSelector(getCurrentQuantityById(id))

  const isInCart = currentQuantity > 0

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const orderedPizza = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    }
    console.log(orderedPizza)
    dispatch(addItem(orderedPizza))
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium text-stone-500 uppercase">Sold out</p>
          )}

          {isInCart && <DeleteItem id={id} />}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
