async function getUserInfo(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
  const result = await response.json()
  console.table(result)
}

const userIdSelected = document.getElementById('userId')

userIdSelected.addEventListener("change", (e) => {
  getUserInfo(e.target.value)
})
