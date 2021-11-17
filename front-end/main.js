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
          }
          var result = data.map(a => a.text);
          var res = data.map(function(a){

            var today = new Date();
            const li = document.createElement('li');
            li.className = "me";
            const divName = document.createElement('div')
            divName.className ="name";
            const divMessage = document.createElement('div')
            divMessage.className ="message";
            const spanName = document.createElement('span');
            spanName.className = "";
            const spanTime = document.createElement('span');
            spanTime.className = "msg-time";  
              spanTime.innerText = a.date;
              spanName.innerText = "Yasin";
              const p = document.createTextNode(a.text);
              divName.appendChild(spanName);
              divMessage.appendChild(p);
              divMessage.appendChild(spanTime);
              li.appendChild(divName);
              li.appendChild(divMessage);
              var currentUl = document.getElementById('ul1');
              currentUl.appendChild(li);
          })

    })
})
()