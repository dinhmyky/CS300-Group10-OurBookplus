const books = [
    {
        title: "Sherlock Holmes",
        author: 'Arthur Conan Doyle',
        image: require('../images/booksImg/book1.jpg'),
        image02: require('../images/booksImg/book1_2.jpg'),
        image03: require('../images/booksImg/book1.jpg'),
        image04: require('../images/booksImg/book1_2.jpg'),
        genreSlug: "Fiction",
        slug: "sherlock-holmes",
        bookType: 'Ebook',
        description:'Sherlock Holmes is a fictional detective created by British author Arthur Conan Doyle. Referring to himself as a "consulting detective" in the stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
    },
    {
        title: "Harry Potter",
        author: 'J. K. Rowling',
        image: require('../images/booksImg/book2.jpg'),
        image02: require('../images/booksImg/book2_3.jpg'),
        image03: require('../images/booksImg/book2.jpg'),
        image04: require('../images/booksImg/book2_3.jpg'),
        genreSlug: "Fiction",
        slug: "harry-potter",
        bookType: 'Both',
        description:"Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people)."
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
        description:'Lavishly illustrated with 98 full-color figures, this book describes waterborne microorganisms—bacteria, viruses, protists, and others—of concern to water operators, as well as techniques for isolation and detection, chemistry, and disinfection.',
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
        description:'Truly non-evolutionary in philosophy, spirit, and sequence of study, this 544-page text begins with the familiar, tangible things of nature and concludes with God’s amazing design at the cellular and chemical level. Abstract concepts are tied to concrete examples through clear, easy-to-read explanations, laying a firm foundation for future studies in chemistry, physics, and other fields. Along with academic knowledge, your teen will gain a greater appreciation for God’s physical creation and an increased interest in science. Key concepts listed at the head of each chapter, pronunciation helps, bold key terms, vivid photographs, full-color diagrams, section reviews, and chapter reviews aid learning and enjoyment. The text will lead your teen through a study of botany, zoology, microbiology, human anatomy and physiology, cytology, genetics, and ecology that reflect the latest advances in man’s understanding of living things without neglecting a foundation in the basics.',
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
        description:'Lavishly illustrated with 98 full-color figures, this book describes waterborne microorganisms—bacteria, viruses, protists, and others—of concern to water operators, as well as techniques for isolation and detection, chemistry, and disinfection.',
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
        description:'Truly non-evolutionary in philosophy, spirit, and sequence of study, this 544-page text begins with the familiar, tangible things of nature and concludes with God’s amazing design at the cellular and chemical level. Abstract concepts are tied to concrete examples through clear, easy-to-read explanations, laying a firm foundation for future studies in chemistry, physics, and other fields. Along with academic knowledge, your teen will gain a greater appreciation for God’s physical creation and an increased interest in science. Key concepts listed at the head of each chapter, pronunciation helps, bold key terms, vivid photographs, full-color diagrams, section reviews, and chapter reviews aid learning and enjoyment. The text will lead your teen through a study of botany, zoology, microbiology, human anatomy and physiology, cytology, genetics, and ecology that reflect the latest advances in man’s understanding of living things without neglecting a foundation in the basics.',
    },
    {
        title: "Sherlock Holmes",
        author: 'Arthur Conan Doyle',
        image: require('../images/booksImg/book1_2.jpg'),
        image02: require('../images/booksImg/book1.jpg'),
        image03: require('../images/booksImg/book1_2.jpg'),
        image04: require('../images/booksImg/book1.jpg'),
        genreSlug: "Fiction",
        slug: "sherlock-holmes-2",
        bookType: 'Ebook',
        description:'Sherlock Holmes is a fictional detective created by British author Arthur Conan Doyle. Referring to himself as a "consulting detective" in the stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
    },
    {
        title: "Harry Potter",
        author: 'J. K. Rowling',
        image: require('../images/booksImg/book2_3.jpg'),
        image02: require('../images/booksImg/book2.jpg'),
        image03: require('../images/booksImg/book2_3.jpg'),
        image04: require('../images/booksImg/book2.jpg'),
        genreSlug: "Fiction",
        slug: "harry-potter-2",
        bookType: 'Both',
        description:"Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
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