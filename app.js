// JavaScript for interactivity (เช่นเพิ่มสินค้าลงตะกร้า)
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('สินค้าถูกเพิ่มลงในตะกร้าแล้ว');
        });
    });
});
