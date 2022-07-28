const btnNode = document.querySelector("#send");
const widthNode = document.querySelector("#width");
const heightNode = document.querySelector("#height");
const errorNode = document.querySelector("#error");
const imageNode = document.querySelector("#image");

const matching = (param) => {
    if (param >= 100 && param <= 300) {
        return true;
    }
    return false;
};

const useRequest = (width, height) => {
    return fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => {
            return response.blob();
        })
        .then((blob) => {return URL.createObjectURL(blob);})
        .catch(() => {console.log("error")});
};

btnNode.onclick = async function() {
    if (matching(widthNode.value) && matching(heightNode.value)) {
        errorNode.innerHTML = "";
        const requestResult = await useRequest(widthNode.value, heightNode.value);
        imageNode.innerHTML = `<img src="${requestResult}" alt="">`;
    }
    else {
        errorNode.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    }
};
