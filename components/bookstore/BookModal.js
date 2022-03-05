import Image from "next/image";

const BookModal = ({ close, title, author, img, price, review, desc, src }) => {
  const closeModal = () => {
    close(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="book-modal">
      <div className="book-box">
        <button id="close-modal" onClick={closeModal}>
          Close
        </button>
        <Image className="modal-img" src={img} alt="bookimg" />
        <div className="right">
          <h1>{title}</h1>
          <p>Author: {author}</p>
          <p>Price: {price}</p>
          <a
            className="booklink"
            href={
              "https://www.amazon.co.uk/gp/browse.html?node=266239&ref_=nav_em__bo_books_0_2_9_2"
            }
            target="_blank"
            rel="noreferrer"
          >
            Source: {src}
          </a>
          <p>Review: {review}</p>
          <h4>Description:</h4>
          {desc && <p id="desc">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default BookModal;
