document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // 阻止表单的默认提交行为  
    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
    if (username === 'yuxuanbai' && password === 'admin123456') {  
        // 验证成功，自动跳转到指定网页  
        window.location.href = 'manage.html'; 
    } else {   
        alert('用户名或密码错误！');  
    }  
});
