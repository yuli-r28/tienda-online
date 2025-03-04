import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import './Login.css'

export default function Login() {
  const handleSuccess = async (response) => {
    console.log("Token de Google:", response.credential);

    // 📌 Enviar el token al backend (lo haremos en el siguiente paso)
    const res = await fetch("http://localhost:5000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: response.credential }),
    });

    const data = await res.json();
    console.log("Usuario autenticado:", data);
  };

  const handleError = () => {
    console.error("Error al iniciar sesión con Google");
  };

  return (
    <GoogleOAuthProvider clientId="937479289069-spu76ie08tgf8av06gb102oqjo5odnt9.apps.googleusercontent.com">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
}
