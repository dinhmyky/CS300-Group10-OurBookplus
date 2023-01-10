import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import Button from './Button'
import bookData from '../assets/data-loaded/books'

const BorrowBook = props => {
//     const navigate = useNavigate();

//   const navigateToBorrow = () => {
//     navigate('/borrow');
//   };

    const product = bookData.getBookBySlug(props.match.params.slug)
    // product = props.product

    const [previewImg, setPreviewImg] = useState(product.img)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    useEffect(() => {
        setPreviewImg(product.image)
        const bgcolor = "#DDFFF9"
        document.body.style.background = bgcolor;
    }, [product])

    // const borrowBook = () => {
    //     let newItem = {
    //         slug: product.slug,
    //     }
    //     props.history.push('/borrow')
    // }

    // const goToBorrow = () => {
    //     props.history.push('/borrow')
    // }

    return (
        <div className="borrow">
            <div className="borrow__images">
                <div className="borrow__images__main">
                    <img src={previewImg} alt="" />
                </div>
                
            </div>
            <div className="borrow__info">
                <h3 className="borrow__info__title">{product.title}</h3>
                <h3 className="borrow__info__author">
                    {product.author}
                </h3>
                <div className="borrow__info__item">
                    <div className="borrow__info__item__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                </div>
            </div>
        </div>
    )
}

BorrowBook.propTypes = {
    product: PropTypes.object.isRequired
}

export default withRouter(BorrowBook)