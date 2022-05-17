import React, { useState, useRef, useEffect } from "react";
// Styles
import "./DetailsCover.scss";

const DetailsCover = ({ covers }) => {
  const [coverIndex, setCoverIndex] = useState(null);
  const coverList = useRef(null);
  let coverListArr;

  // Methods
  function swipeCover(coverArray) {
    const ARRAY_SIZE = coverArray.length;

    coverArray.map((cover) => {
      const currentIndex = parseInt(cover.dataset.index);
      const nextIndex = (currentIndex + 1) % ARRAY_SIZE;
      cover.style.cssText = `--depth: ${nextIndex}`;
      cover.dataset.index = nextIndex;
    });
  }

  useEffect(() => {
    coverListArr = Array.from(coverList.current.children);
  }, []);

  return (
    <figure className="DetailsCover" ref={coverList}>
      {covers.map(({ cover, id }, index) => (
        <img
          src={cover.src}
          alt={cover.alt}
          key={id}
          style={{ "--depth": index }}
          data-index={index}
          onClick={() => swipeCover(coverListArr)}
        />
      ))}
      {/* {details.map(({cover, id}, index) => <img src={cover.src} alt={cover.alt} key={id} style={{"--depth": coverIndex ? coverIndex : index}}/>)} */}
    </figure>
  );
};

export default DetailsCover;
