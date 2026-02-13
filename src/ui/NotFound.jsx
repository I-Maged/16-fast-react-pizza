import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import LinkButton from "./LinkButton"

const NotFound = () => {
  const error = useRouteError()

  return (
    <div>
      {isRouteErrorResponse(error) ? (
        <div>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      ) : error instanceof Error ? (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      ) : (
        <h1>Unknown Error</h1>
      )}
      <LinkButton to={-1}>&larr; Go back</LinkButton>
    </div>
  )
}

export default NotFound
