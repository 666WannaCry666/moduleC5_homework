const btnNode = document.querySelector("#button");
const limitNode = document.querySelector("#limit");
const pageNode = document.querySelector("#page");
const errorNode = document.querySelector("#error");
const imagesNode = document.querySelector("#images");

window.onload = function() {
    createImages(JSON.parse(localStorage.getItem('images')).images);
};

const useRequest = (page, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let imgList = [];
                json.forEach(item => {
                    imgList.push(item.download_url);
                });
                return imgList;
            })
};

const createImages = (imgList) => {
    let blocks = "";
    imgList.forEach(item => {
        let img = `<img class="block" src="${item}" alt="">`;
        blocks = blocks + img;
    });

    imagesNode.innerHTML = blocks;
}

btnNode.onclick = async function() {
    if ((limitNode.value >= 1 && limitNode.value <= 10) && (pageNode.value >= 1 && pageNode.value <= 10)) {
        errorNode.innerHTML = "";
        imagesNode.innerHTML = "";
        localStorage.removeItem('images');
        const imgList = await useRequest(pageNode.value, limitNode.value);
        createImages(imgList);
        localStorage.setItem('images', JSON.stringify({images: imgList}));
    }
    else if (limitNode.value < 1 || limitNode.value > 10) {
        errorNode.innerHTML = "Лимит вне диапазона от 1 до 10";
    }
    else if (pageNode.value < 1 || pageNode.value > 10) {
        errorNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    }
    else {
        errorNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    }
};

window
