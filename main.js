// fetch('https://reqres.in/api/users?page=2', {
//     method: 'GET',
//     body: JSON.stringify(),
//     headers: { 'Content-Type': 'application/json' },
//   })
//  .then(res => res.json()) 
//  .then(data => console.log(data))
//  .catch(error => console.log(error))



fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  
  .then(users => {
    renderUsers(users);  
  })
  .catch(error => console.error('Error fetching data:', error));

  function renderUsers(users) {
    const userList = document.getElementById('user-list');
  
    userList.innerHTML = '';
  
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.className = 'user-item';
      userItem.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      `;
  
      userList.appendChild(userItem);
    });
  }
  