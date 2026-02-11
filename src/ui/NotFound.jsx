import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const error = useRouteError()

  return (
    <div>
      {isRouteErrorResponse(error) ? (
        <div>
          <h1>1</h1>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      ) : error instanceof Error ? (
        <div>
          <h1>2</h1>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      ) : (
        <h1>Unknown Error</h1>
      )}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  )
}

export default NotFound
