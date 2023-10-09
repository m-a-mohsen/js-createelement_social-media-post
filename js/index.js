console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const sectionElement = document.createElement("section");
sectionElement.classList.add('post')

const paragraphElement = document.createElement("p");
paragraphElement.classList.add("post__content");
paragraphElement.textContent = 'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'

const footerElement = document.createElement("footer");
footerElement.classList.add("post__footer")

const spanElement = document.createElement("span");
spanElement.classList.add("post__username");
spanElement.textContent = "@username";

const buttonElement = document.createElement("button");
buttonElement.classList.add("post__button");
buttonElement.addEventListener("click", handleLikeButtonClick);
buttonElement.textContent = "♥ Like";


footerElement.append(spanElement, buttonElement);
sectionElement.append(paragraphElement, footerElement);
document.querySelector('body').append(sectionElement);
console.log(document.querySelector('body'));

