(function () {
    const server = 'http://127.0.0.1:3000'
    const socket = io(server);

    socket.on('notification', (data) => {
        console.log('Message depuis le seveur:', data);
    })

    fetch(`${server}/listMsg`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var value = data[i];
			const div = document.createElement('div')
			const span = document.createElement('span');
			const p = document.createTextNode(message.value);
			div.appendChild(p);
			var currentUl = document.getElementById('li1');
			currentUl.appendChild(div);
            addItemToDOM(value);
          }
    })
})
()