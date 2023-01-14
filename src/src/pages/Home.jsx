import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import FeaturesCard from '../components/FeaturesCard'
import Grid from '../components/Grid'
import BookCard from '../components/BookCard'

// import heroSliderData from '../assets/fake-data/hero-slider'
import features from '../assets/data-loaded/features'
import bookData from '../assets/data-loaded/books'

import SimpleImageSliderHome from '../components/SimpleImageSliderHome'
import YourAppointment from '../components/YourAppointment'

// useLayoutEffect(() => {
//     document.body.style.backgroundColor = "#DDFFF9"
// });
const Home = () => {
    useEffect(() => {
        // change background color with a random color
        const bgcolor = "#DDFFF9"
        document.body.style.background = bgcolor;
      });
    return (
        
        <Helmet title="Home">
            {/* slide image */}
            <Section>
                <SectionBody>
                <SimpleImageSliderHome/>
                </SectionBody>
            </Section>
            {/* end slide image */}

            {/* start your appointment */}
            <Section>
                <YourAppointment/>
            </Section>
            {/* end your appointment */}

            {/* start intro to features */}
            <Section>
                <SectionBody>
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={30}
                    >
                        {
                            features.map((item, index) => <Link key={index} to="/policy">
                                <FeaturesCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end intro to features */}


            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    New books
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={100}
                    >
                        {
                            bookData.getAllBooks().map((item, index) => (
                                <BookCard
                                    key={index}
                                    image={item.image}
                                    name={item.title}
                                    author={item.author}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}

        </Helmet>
    )
}

export default Home
