export async function signIn({username, password}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "angelo" && password === "will") {
        resolve();
      } else{
        reject();
      }
    }, 2000);
  });
}