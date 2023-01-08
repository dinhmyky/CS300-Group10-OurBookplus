import React from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import BookCard from '../components/BookCard'
import ProductView from '../components/ProductView'

import bookData from '../assets/data-loaded/books'

const Product = props => {

    const product = bookData.getBookBySlug(props.match.params.slug)

    const relatedProducts = bookData.getBooks(6)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <BookCard
                                    key={index}
                                    img={item.image}
                                    
                                    name={item.title}
                                    author={item.author}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product