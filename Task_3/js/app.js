const btn = document.querySelector("#send-req");
const input = document.querySelector("#amount");
const pictures = document.querySelector("#pics");

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log("Статус ответа: ", xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log("Ошибка! Статус ответа: ", xhr.status);
    }

    xhr.send();
}

function displayPics(picsData) {
    let cards = '';

    picsData.forEach(item => {
        const cardBlock = `
        <div class="picture">
            <img src="${item.download_url}" alt="Picture">
        </div>
        `
        cards = cards + cardBlock;
    });

    pictures.innerHTML = cards;
}

btn.onclick = function() {
    if (input.value < 1 || input.value > 10) {
        pictures.innerHTML = "Число вне диапазона от 1 до 10";
    }
    else {
        useRequest(`https://picsum.photos/v2/list?limit=${input.value}`, displayPics);
    }
}
