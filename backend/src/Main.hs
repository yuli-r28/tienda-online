{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
{-# LANGUAGE OverloadedStrings #-}

import Servant
import Network.Wai
import Network.Wai.Handler.Warp
import Network.Wai.Middleware.Cors
import Data.Text (Text)

-- Definir la API
type API = "saludo" :> Get '[PlainText] Text

-- Implementar el endpoint
server :: Server API
server = return "Hola desde Haskell 😃"

-- Middleware de CORS (ahora permite TODO)
corsMiddleware :: Middleware
corsMiddleware = cors (const $ Just simpleCorsResourcePolicy
    { corsOrigins = Nothing  -- Permitir todos los orígenes
    , corsMethods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    , corsRequestHeaders = ["Content-Type", "Authorization"]
    })

-- Aplicación principal
app :: Application
app = corsMiddleware $ serve (Proxy :: Proxy API) server

main :: IO ()
main = do
    putStrLn "Servidor corriendo en http://localhost:8080/"
    run 8080 app