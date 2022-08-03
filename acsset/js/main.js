const quizData = [
    {
        question: "HTML là viết tắt của...",
        a: "Hyperlinks and Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyper Text Markup Language",
        correct: "c",
    },
    {
        question: "Ai là người đưa ra các tiêu chuẩn Web?",
        a: "Tổ chức World Wide Web Consortium (W3C)",
        b: "Apple",
        c: "Google",
        d: "Microsoft",
        correct: "a",
    },
    {
        question: "Chọn thẻ HTML đúng nhất cho định dạng tiêu đề lớn nhất?",
        a: "<h6>",
        b: "<h1>",
        c: "<head>",
        d: "<heading>",
        correct: "b",
    },
    {
        question: "Thẻ nào dùng để xuống dòng trong HTML?",
        a: "<enter>",
        b: "<br>",
        c: "<break>",
        d: "<lb>",
        correct: "b",
    },
    {
        question: "Chọn thẻ HTML chính xác dùng để xác định văn bản quan trọng",
        a: "<important>",
        b: "<strong>",
        c: "<b>",
        d: "<i>",
        correct: "b",
    },
    {
        question: "Chọn thẻ HTML được dùng nhấn mạnh nội dung văn bản",
        a: "<i>",
        b: "<em>",
        c: "<italic>",
        d: "<b>",
        correct: "b",
    },
    {
        question: "Ký tự nào được dùng để biểu thị cho một thẻ đóng?",
        a: "<\>",
        b: "</>",
        c: "<^>",
        d: "<*>",
        correct: "b",
    },
    {
        question: "Những thẻ HTML nào dùng để định nghĩa cấu trúc của bảng?",
        a: "<table><tr><tt>",
        b: "<table><tr><td>",
        c: "<table><head><tfoot>",
        d: "<thead><body><tr>",
        correct: "b",
    },
    {
        question: "Các thẻ HTML có thể viết liền nhau mà không cần bắt buộc xuống dòng mới?",
        a: "Đúng",
        b: "Sai",
        correct: "a",
    },
    {
        question: "Thẻ <iframe> được sử dụng để hiển thị một trang trong một trang web?",
        a: "Đúng",
        b: "Sai",
        c: "Không có thẻ <iframe>",
        correct: "a",
    },
    {
        question: "Thẻ HTML nào dùng để xác định tiêu đề của một trang?",
        a: "<meta>",
        b: "<head>",
        c: "<header>",
        d: "<title>",
        correct: "d",
    },
    {
        question: "Thuộc tính HTML nào chỉ định văn bản thay thế cho hình ảnh, nếu hình ảnh không thể hiển thị?",
        a: "title",
        b: "src",
        c:"alt",
        d: "longdesc",
        correct: "c",
    },
    {
        question: "Biên dịch cú pháp sau: <strong>Quantrimang</strong>",
        a: "Sẽ làm cho chuỗi ký tự QuanTriMang trở nên đậm",
        b: "Sẽ đánh dấu chuỗi ký tự QuanTriMang là đậm",
        c:"Sẽ in ra chuỗi ký tự QuanTriMang với font đậm",
        correct: "c",
    },
    {
        question: "Các bảng có thể lồng lẫn nhau?",
        a: "Đúng",
        b: "Sai",
        correct: "a",
    },
    {
        question: "Đáp án nào dưới đây là đúng?",
        a: "<b>Click Here<b>",
        b: "<strong>Click Here<strong>",
        c:"<b>Click Here</b>",
        d: "</strong>Click Here</strong>",
        correct: "c",
    },
    {
        question: "Phương án nào sau đây là tag 2 side",
        a: "DT",
        b: "LI",
        c:"DD",
        d: "DL",
        correct: "d",
    },
    {
        question: "Các trình duyệt thường áp dụng tính năng của toàn bộ tag cho tới phần tag…",
        a: " Quit",
        b: "Closing",
        c:"Exit",
        d: "Anti",
        correct: "b",
    },
    {
        question: "Thuộc tính HTML nào chỉ định văn bản thay thế cho hình ảnh, nếu hình ảnh không thể hiển thị?",
        a: "title",
        b: "src",
        c:"alt",
        d: "longdesc",
        correct: "c",
    },
    {
        question: " … là đoạn mã HTML có chức năng kiểm soát quá trình hiển thị của nội dung văn bản",
        a: "Tags",
        b: "Codas",
        c:"Slashes",
        d: "Properties",
        correct: "a",
    },
    {
        question: "Tính năng… HTML sẽ xử lý định dạng nội dung text và chuyển thành mã HTML",
        a: "Browser",
        b: "Editor",
        c:"Converter",
        d: "Processor",
        correct: "c",
    },
    {
        question: "Để tạo đường dẫn kết nối tới các anchor, chúng ta sẽ phải dùng thuộc tính… trong tag",
        a: "Name",
        b: "Tag",
        c:"Link",
        d: "Href",
        correct: "d",
    },
    {
        question: " Các đường dẫn tương đối sẽ làm cho những đường kết nối hypertext",
        a: "Linh động",
        b: "Rời rạc",
        c:"Thống nhất",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const time_line = document.querySelector(".time-width");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

var mins = 15;
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;
var widthValue = 0;
startTimerLine(widthValue);
setTimeout(Decrement,1000); 
    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("time").innerHTML = currentMinutes + ":" + currentSeconds;
        if(secs !== -1) setTimeout('Decrement()',1000);
    }
function startTimerLine(secs){
    counterLine = setInterval(timer, 900);
        function timer(){
            secs += 1; 
            time_line.style.width = secs + "px"; 
            if(secs > 472){ 
                clearInterval(counterLine);  
            }
        }
    }
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})