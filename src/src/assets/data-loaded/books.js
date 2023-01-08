// const product_01_image_01 = require('../images/products/product-01 (1).jpg')
// const product_01_image_02 = require('../images/products/product-01 (2).jpg')
// // const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

// const product_02_image_01 = require('../images/products/product-02 (1).jpg')
// const product_02_image_02 = require('../images/products/product-02 (2).jpg')

// const product_03_image_01 = require('../images/products/product-03 (1).jpg')
// const product_03_image_02 = require('../images/products/product-03 (2).jpg')

// const product_04_image_01 = require('../images/products/product-04 (1).jpg')
// const product_04_image_02 = require('../images/products/product-04 (2).jpg')

// const product_05_image_01 = require('../images/products/product-05 (1).jpg')
// const product_05_image_02 = require('../images/products/product-05 (2).jpg')

// const product_06_image_01 = require('../images/products/product-06 (1).jpg')
// const product_06_image_02 = require('../images/products/product-06 (2).jpg')

// const product_07_image_01 = require('../images/products/product-07 (1).jpg')
// const product_07_image_02 = require('../images/products/product-07 (2).jpg')

// const product_08_image_01 = require('../images/products/product-08 (1).jpg')
// const product_08_image_02 = require('../images/products/product-08 (2).jpg')

// const product_09_image_01 = require('../images/products/product-09 (1).jpg')
// const product_09_image_02 = require('../images/products/product-09 (2).jpg')

// const product_10_image_01 = require('../images/products/product-10 (1).jpg')
// const product_10_image_02 = require('../images/products/product-10 (2).jpg')

// const product_11_image_01 = require('../images/products/product-11 (1).jpg')
// const product_11_image_02 = require('../images/products/product-11 (2).jpg')

// const product_12_image_01 = require('../images/products/product-12 (1).jpg')
// const product_12_image_02 = require('../images/products/product-12 (2).jpg')

const books = [
    {
        title: "Sherlock Homes",
        author: 'Arthur Conan Doyle',
        image: require('../images/booksImg/book1.jpg'),
        genreSlug: "Fiction",
        slug: "sherlock-homes",
        bookType: 'Ebook',
        description:'....',
    },
    {
        title: "Harry Potter",
        author: 'J. K. Rowling',
        image: require('../images/booksImg/book2.jpg'),
        genreSlug: "Fiction",
        slug: "harry-potter",
        bookType: 'Both',
        description:'....',
    },
    {
        title: "Basic Microbiology",
        author: 'Denis R.Hill',
        image: require('../images/booksImg/book3.jpg'),
        genreSlug: "Science",
        slug: "basic-microbiology",
        bookType: 'Ebook',
        description:'....',
    },
    {
        title: "Biology",
        author: 'Keith Graham',
        image: require('../images/booksImg/book4.png'),
        genreSlug: "Science",
        slug: "biology",
        bookType: 'Printed book',
        description:'....',
    },
    {
        title: "Basic Microbiology",
        author: 'Denis R.Hill',
        image: require('../images/booksImg/book3.jpg'),
        genreSlug: "Science",
        slug: "basic-microbiology",
        bookType: 'Ebook',
        description:'....',
    },
    {
        title: "Biology",
        author: 'Keith Graham',
        image: require('../images/booksImg/book4.png'),
        genreSlug: "Science",
        slug: "biology",
        bookType: 'Printed book',
        description:'....',
    },
    {
        title: "Sherlock Homes",
        author: 'Arthur Conan Doyle',
        image: require('../images/booksImg/book1.jpg'),
        genreSlug: "Fiction",
        slug: "sherlock-homes",
        bookType: 'Ebook',
        description:'....',
    },
    {
        title: "Harry Potter",
        author: 'J. K. Rowling',
        image: require('../images/booksImg/book2.jpg'),
        genreSlug: "Fiction",
        slug: "harry-potter",
        bookType: 'Both',
        description:'....',
    },
]

const getAllBooks = () => books

const getBooks = (count) => {
    const max = books.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return books.slice(start, start + count)
}

const getBookBySlug = (slug) => books.find(e => e.slug === slug)

const bookData = {
    getAllBooks,
    getBooks,
    getBookBySlug
}



export default bookData