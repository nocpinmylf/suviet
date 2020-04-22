const collapseBTN = document.getElementById('collaspe-btn');
const header = document.getElementsByClassName('header-nav')[0];

// responsive header nav
collapseBTN.addEventListener('click', () => {
  if(!header.classList.contains('show')) header.classList.add('show');
  else header.classList.remove('show');
});

// typing text 
let i = 0;
let quote = `Lật lại những trang sử các thời kỳ, mỗi người dân Việt, dù trong hay ngoài nước, luôn được khơi dậy tình yêu quê hương, niềm tự hào tổ quốc. Đó là thời nghìn năm Bắc thuộc với tinh thần chống Hán
hóa, nhiều cuộc khởi nghĩa giành lại chủ quyền diễn ra mà trận chiến thắng Bạch Đằng là đỉnh cao. Đó
là thời kỳ độc lập tự chủ, cha ông không những bảo vệ non sông mà còn mở mang bờ cõi, không những
giữ gìn mà còn làm phong phú trường tồn bản sắc văn hóa Việt Nam. Với những chiến công hiển hách
chống phương Bắc xâm lược, những anh hùng Thập đạo tướng quân Lê Hoàn, Lý Thường Kiệt, Trần
Quốc Tuấn, Lê Lợi, Nguyễn Huệ... mãi mãi lưu danh...`;
let speed = 50;
const slogan = document.getElementById('slogan');

window.addEventListener('scroll', () => {
  if(isInViewport(document.getElementById('quote'))) typeWriter();
});

function typeWriter() {
  if (i < quote.length) {
    document.getElementById("quote").innerHTML += quote.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function isInViewport (elem) { // khi scroll xuong va thay duoc elem thi true
  var bounding = elem.getBoundingClientRect();
  return bounding.top <= (window.innerHeight || document.documentElement.clientHeight);
};

// lazy loading ???
const imgList = document.querySelectorAll('img');

const lazy = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');

        img.setAttribute('src', src);
        observer.disconnect();
      }
    });
  });
  io.observe(target);
};
imgList.forEach(lazy);