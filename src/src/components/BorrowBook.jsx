import React, { useState, useEffect } from 'react'
import {useParams, useLocation} from 'react-router-dom';
// import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import Button from './Button'
import bookData from '../assets/data-loaded/books'

const BorrowBook = () => {
//     const navigate = useNavigate();

//   const navigateToBorrow = () => {
//     navigate('/borrow');
//   };

    //const product = bookData.getBookBySlug(props.match.params.slug)

    // const image = useLocation().state.image;
    // const title=useLocation().state.title;
    // const author=useLocation().state.author;
    // const description=useLocation().state.description;
    // console.log(image);
    // console.log(title);
    // console.log(author);
    // console.log(description);
    
    // const [previewImg, setPreviewImg] = useState(image)

    // const [descriptionExpand, setDescriptionExpand] = useState(false)

    useEffect(() => {
        // setPreviewImg(image)
        const bgcolor = "#DDFFF9"
        document.body.style.background = bgcolor;
    })
    const stateParamValue=useLocation().state;
    const product=bookData.getBookBySlug(stateParamValue);
    console.log(product);

    // const borrowBook = () => {
    //     let newItem = {
    //         slug: product.slug,
    //     }
    //     props.history.push('/borrow')
    // }

    // const goToBorrow = () => {
    //     props.history.push('/borrow')
    // }
    return(
        <div className="borrowbook">
        {
          
            <div className="details">
              <div className="big-img">
                <img src={product.image} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{product.title}</h2>
                </div>

                <p>{product.author}</p>
                <p>{product.description}</p>

              </div>
            </div>
          
        }
      </div>
      );
    // return (
    //     <div className="borrow">
    //             <div className="borrow__images">
    //                 <img src={image} alt="" />
    //             </div>
    //             <div className="borrow__info">
    //             <h3 className="borrow__info__title">{title}</h3>
    //             <h3 className="borrow__info__author">{author}</h3>
    //             <div className="borrow__info__item__content" dangerouslySetInnerHTML={{__html: description}}></div>
    //             </div>
    //     </div>
        
    // )
}

// BorrowBook.propTypes = {
//     product: PropTypes.object.isRequired
// }

export default withRouter(BorrowBook)

// const BorrowBook = () => {
//   return (
//     <div>BorrowBook</div>
//   )
// }

// export default BorrowBook