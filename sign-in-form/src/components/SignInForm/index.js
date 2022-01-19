import { useReducer } from "react";

import { signIn } from "../../services/api";

import "./styles.css";

const signInReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSignedIn: true,
        error: "",
      };

    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: "Usuário ou senha inválido",
      };

    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
      };      

    case "SET_ATRIBUTE":
      return {
        ...state,
        [action.fieldName]: action.payload
      };   
  
    default:
      break;
  }
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isSignedIn: false,
}

const SignInForm =() => {
  const [state, dispatch] = useReducer(signInReducer, initialState);

  const { username, password, isLoading, error, isSignedIn } = state;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    dispatch({type: "SIGN_IN"});

    try {
      await signIn({ username, password });  
      dispatch({type: "SUCCESS"});
    } catch (error) {
      dispatch({type: "ERROR"});    
    }

  }

  return (
    <main>
      {isSignedIn ? (
        <>
          <h1>Olá, {username}!</h1>
          <button onClick={() => dispatch({type: "SIGN_OUT"})}>Sair</button>
        </>
      ) : (

        <form onSubmit={handleFormSubmit}> 
          <h1>Autenticação</h1>

          {error && <p className="error"> {error}</p>}

          <label>
            <p>Nome do Usuário</p>
            <input type="text" value={username} onChange={({target}) => 
            dispatch({ type: "SET_ATRIBUTE", fieldName: "username", payload: target.value })}/>
          </label>

          <label>
            <p>Senha</p>
            <input type="password" value={password} onChange={({target}) => 
            dispatch({ type: "SET_ATRIBUTE", fieldName: "password", payload: target.value })}/>
          </label>

          <footer>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Autenticando..." : "Entrar"}
            </button>
          </footer>
        </form>

      )}
    </main>
  );
};

export default SignInForm;
