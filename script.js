const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];
let current = 0;
let timer;

function showSlide(index){
  current = (index + slides.length) % slides.length;
  slides.forEach((s,i)=>s.classList.toggle('active',i===current));
  dots.forEach((d,i)=>d.classList.toggle('active',i===current));
}
function startSlider(){ timer = setInterval(()=>showSlide(current+1), 5000); }
dots.forEach((dot,i)=>dot.addEventListener('click',()=>{clearInterval(timer);showSlide(i);startSlider();}));
startSlider();

document.getElementById('registrationForm').addEventListener('submit', function(e){
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.textContent = 'آپ کی درخواست demo mode میں تیار ہو گئی ہے۔ اصل submission کے لیے verified backend/email service کو securely configure کریں۔';
  this.reset();
});
