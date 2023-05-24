async function getUserInfo(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos${userId}`)
  const result = await response.json()


  for (const task of result) {
    const row = document.createElement('tr')


    row.innerHTML = `
    <td class="text-center">${task.userId}</td>
    <td class="text-center">${task.id}</td>
    <td>${task.title}</td>
    <td class="text-center"><input type="checkbox" id="status${task.id}" disabled></td>
    `
    table.appendChild(row)

    const status = document.getElementById(`status${task.id}`)
    status.checked = task.completed
  }
}

const userIdSelected = document.getElementById('userId')
const table = document.getElementById('displayUserInfo')

userIdSelected.addEventListener("change", (e) => {
  const userId = e.target.value

  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i)
  }

  userId === "" ? getUserInfo("") : getUserInfo(`?userId=${userId}`)
})

getUserInfo("")