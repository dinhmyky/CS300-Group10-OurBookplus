const books = [
    {
        title: "Sherlock Homes",
        author: 'Arthur Conan Doyle',
        image: require('../images/booksImg/book1.jpg'),
        image02: require('../images/booksImg/book1_2.jpg'),
        image03: require('../images/booksImg/book1.jpg'),
        image04: require('../images/booksImg/book1_2.jpg'),
        genreSlug: "Fiction",
        slug: "sherlock-homes",
        bookType: 'Ebook',
        description:'Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
    },
    {
        title: "Harry Potter",
        author: 'J. K. Rowling',
        image: require('../images/booksImg/book2.jpg'),
        image02: require('../images/booksImg/book2_2.jpg'),
        image03: require('../images/booksImg/book2.jpg'),
        image04: require('../images/booksImg/book2_2.jpg'),
        genreSlug: "Fiction",
        slug: "harry-potter",
        bookType: 'Both',
        description:'....',
    },
    {
        title: "Basic Microbiology",
        author: 'Denis R.Hill',
        image: require('../images/booksImg/book3.jpg'),
        image02: require('../images/booksImg/book3.jpg'),
        image03: require('../images/booksImg/book3.jpg'),
        image04: require('../images/booksImg/book3.jpg'),
        genreSlug: "Science",
        slug: "basic-microbiology",
        bookType: 'Ebook',
        description:'....',
    },
    {
        title: "Biology",
        author: 'Keith Graham',
        image: require('../images/booksImg/book4.png'),
        image02: require('../images/booksImg/book4.png'),
        image03: require('../images/booksImg/book4.png'),
        image04: require('../images/booksImg/book4.png'),
        genreSlug: "Science",
        slug: "biology",
        bookType: 'Printed book',
        description:'....',
    },
    {
        title: "Basic Microbiology",
        author: 'Denis R.Hill',
        image: require('../images/booksImg/book3.jpg'),
        image02: require('../images/booksImg/book3.jpg'),
        image03: require('../images/booksImg/book3.jpg'),
        image04: require('../images/booksImg/book3.jpg'),
        genreSlug: "Science",
        slug: "basic-microbiology",
        bookType: 'Ebook',
        description:'....',
    },
    {
        title: "Biology",
        author: 'Keith Graham',
        image: require('../images/booksImg/book4.png'),
        image02: require('../images/booksImg/book4.png'),
        image03: require('../images/booksImg/book4.png'),
        image04: require('../images/booksImg/book4.png'),
        genreSlug: "Science",
        slug: "biology",
        bookType: 'Printed book',
        description:'....',
    },
    {
        title: "Sherlock Homes",
        author: 'Arthur Conan Doyle',
        image: require('../images/booksImg/book1.jpg'),
        image02: require('../images/booksImg/book1_2.jpg'),
        image03: require('../images/booksImg/book1.jpg'),
        image04: require('../images/booksImg/book1_2.jpg'),
        genreSlug: "Fiction",
        slug: "sherlock-homes",
        bookType: 'Ebook',
        description:'....',
    },
    {
        title: "Harry Potter",
        author: 'J. K. Rowling',
        image: require('../images/booksImg/book2.jpg'),
        image02: require('../images/booksImg/book2_2.jpg'),
        image03: require('../images/booksImg/book2.jpg'),
        image04: require('../images/booksImg/book2_2.jpg'),
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