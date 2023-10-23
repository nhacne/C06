function checkUsername () {     // Khai báo hàm
    var username = el.value;    //  Lưu trữ tên người dùng trong biến
    if (username.length < 5) {  // Nếu tên người dùng < 5 ký tự
        elMsg.className = 'warning';    // Cập nhật thông báo
        elMsg.textContent = 'Not long enough, yet...';
    }else {
        elMsg.textContent = ''; // Xóa tin nhắn
    }
}

function tipUserName () {   // Khai báo hàm
    elMsg.className = 'tip';        //  
    elMsg.innerHTML = 'Username must be at least 5 characters';     //
}

var el = document.getElementById('username');       //
var elMsg = document.getElementById('feedback');    //

//
el.addEventListener('focus',tipUserName,false);        //
el.addEventListener('blur',checkUsername,false)         //