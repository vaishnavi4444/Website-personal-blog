import NextLink from 'next/link'
import {
    Container,
    Heading,
    Box,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center">
                    hello <a href='/works/'>Works!</a>
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Dylan Hudson
                        </Heading>
                        <p>Junior Software Developer ( Java  |  C#  |  JavaScript )</p>
                    </Box>
                </Box>
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me:
                    </Heading>
                    <Paragraph>Dylan is a junior full-stack developer in Yorkshire. He has 
                        a First Class Batchelors degree in Computing and has worked on a number 
                        of different platforms with a variety of technologies. He is experienced 
                        with the full software development lifecycle, both  the design and 
                        development of an artefact to long-term support.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button righticon={<ChevronRightIcon/>} color="purple">
                                Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Biography:
                    </Heading>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        Began Studies at The University of Huddersfield in Computing.
                        Focus on programming modules and the theory.
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Began placement year at Fusion IT as a Junior Full-Stack 
                        Software Developer on a one-year contract (Aug 2018- Sept 2019) 
                        utilising C# and SQL primarially. Returned to UoH for final year.
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Completed Studies at The University of Huddersfield, Graduating
                        with a First-Class Honours degree (1:1).
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Studying Javascript while seeking employment oppurtunities and work.
                        Small works developed in Java/C# and Dart as well.
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Began work at Jetsoft as a Junior Full-Stack Developer, working
                        on a variety of greenfield projects for various clients utilising
                        .Net Framework, C#, JavaScript, SQL, WebGL and MS Machine Learning 
                        Frameworks primarially.
                    </BioSection>
                </Section>
                <br/>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        My Achievements:
                    </Heading>
                    <Paragraph>
                        I&apos;d say in University my Final Year Project (FYP) was my biggest
                        as I researched AI vision technology and wrote an algorithm for 
                        a self driving car to detect obstacles and prompt a reaction.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        In the workplace, it&apos;s a mix between my work for Global Advocacy
                        based in Dubai, in which I worked across their entire conveyancing 
                        system while helping train a new hire. I also took pride in my work 
                        for Fusion themselves for the internal systems and software packages 
                        to be sold to their Clientelle. 
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page