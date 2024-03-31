function redirectToStartPage() {
    setTimeout(function() {
        window.location.href = 'StartPage.html';
    }, 2000);
}

function sayHello() {
    var response = prompt("请输入你的姓名");
    alert("你好" + response + ", 祝你在大学游玩愉快。");
    // 更新 HTML 元素中的文本内容，包含用户姓名
    document.getElementById("greeting").innerText = response;
}

// 调用 JavaScript 函数
sayHello();

function displayParagraph(id, delay) {
    setTimeout(function() {
        document.getElementById(id).style.display = 'block';
    }, delay);
}

// 调用函数显示段落
displayParagraph('1', 3000);
displayParagraph('2', 6000);
displayParagraph('3', 9000);
displayParagraph('4', 12000);
displayParagraph('5', 14000);
