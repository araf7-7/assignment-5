function get_element_by_id(elementID) {
    return document.getElementById(elementID);
}


function set_element_by_id(elementID, value) {
    document.getElementById(elementID).innerText = value;
}


function create_items(seatInner, ticketPrice) {
    let new_li = document.createElement("li");
    new_li.classList.add('row')
    let p1 = document.createElement("p");
    p1.innerText = seatInner;

    let p2 = document.createElement("p");
    p2.innerText = "Economy";
    let p3 = document.createElement("p");
    p3.innerText = ticketPrice;

    new_li.appendChild(p1)
    new_li.appendChild(p2)
    new_li.appendChild(p3)
    get_element_by_id('select-ticket').appendChild(new_li)
}



// -------Main function hare-----------
let counter = 0;
let ticket_total = 0;
let check_arr = [];
let condi_arr = [];
let seat_items = document.getElementsByClassName('sit-button');

for (const seat of seat_items) {
    seat.addEventListener('click', function (e) {

        if (counter < 4) {
            if (check_arr.includes(seat)) {
                alert("You can't select one seat more time.")
                return;
            }
            else {
                // ---counter and available site count
                counter += 1;
                if (counter > 2) {
                    document.getElementById('couponInput').removeAttribute('readonly')
                    document.getElementById('apply-btn').removeAttribute('disable')
                    console.log(counter);
                }
                ticket_total += parseInt(get_element_by_id('seat-price').innerText);
                let seat_available = parseInt(get_element_by_id('available-seat').innerText);
                set_element_by_id('available-seat', seat_available - 1)
                // ----set total----
                set_element_by_id('total-price', ticket_total);
                set_element_by_id('grand-total', ticket_total);
                // ---set button bg
                e.target.classList.add('bg-[#1DD100]')


                // ---selected seat-----
                set_element_by_id('selected-seat', counter)

                // ----create buy recept---
                create_items(seat.innerText, get_element_by_id('seat-price').innerText);
            }
        }
        else {
            alert("You can't select more than 4 ticket")
        }

        check_arr.push(seat);
    })
}

get_element_by_id('couponInput').addEventListener('keyup', function () {
    let userInput = get_element_by_id('couponInput').value;
    if (userInput !== '') {
        get_element_by_id('apply-btn').removeAttribute('disabled');

    }
})

function couponApply() {
    console.log('hhhhhhhh');
    let userInput = get_element_by_id('couponInput').value;
    const coupon_1 = 'NEW15';
    const coupon_2 = 'Couple 20';
    console.log(userInput, coupon_1);
    if (userInput === coupon_1) {
        let discount1 = ticket_total * 0.15;
        set_element_by_id('grand-total', ticket_total - discount1);
        set_element_by_id('discount-price', discount1)
        console.log((ticket_total * 550) - discount1);
        get_element_by_id('input-filed').classList.add("hidden");
        get_element_by_id('discount').classList.remove("hidden");
    }
    else if (userInput === coupon_2) {
        let discount2 = ticket_total * 0.20;
        set_element_by_id('grand-total', ticket_total - discount2);
        set_element_by_id('discount-price', discount2)
        console.log((ticket_total * 550) - discount2);
        get_element_by_id('input-filed').classList.add("hidden");
        get_element_by_id('discount').classList.remove("hidden");
    }
    else {
        alert("Your coupon is Invalid")
    }
}

get_element_by_id('submitInfo').addEventListener('keyup', function () {
    get_element_by_id('modalbutton').removeAttribute("disabled");
})

function reload() {
    location.reload()
}