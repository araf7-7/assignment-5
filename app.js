let totalPrice = 0;
let selectedSeats = [];
const seatPrice = 550;

function buySeat(seatName) {
    if (selectedSeats.length < 4) {
        totalPrice += seatPrice;
        selectedSeats.push(seatName);
        updateUI();
    } else {
        alert('You cannot buy more than 4 seats.');
    }

    if (selectedSeats.length === 3) {
        document.getElementById('couponContainer').classList.remove('hidden');
    }
}

function applyCoupon() {
    const couponCode = document.getElementById('couponInput').value;
    let discountPercentage = 0;
    if (couponCode === 'New15') {
        discountPercentage = 15;

    }

    else if (couponCode === 'Couple 20') {
        discountPercentage = 20;
    }
    else {
        alert('The Coupon Is Invalid.')
    }



    const discountAmount = totalPrice * (discountPercentage / 100);
    const discountedPrice = totalPrice - discountAmount;
    document.getElementById('grandTotal').textContent = discountedPrice;
    document.getElementById('grandTotalInfo').classList.remove('hidden');
}


function updateUI() {
    document.getElementById('totalPrice').textContent = totalPrice;
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    selectedSeats.forEach(seat => {
        const ticket = document.createElement('p');
        ticket.textContent = `${seat} Economoy 550`;
        ticketList.appendChild(ticket);
    });
}

document.getElementById('applyCouponBtn').addEventListener('click', applyCoupon);