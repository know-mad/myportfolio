import React from 'react'
import { Link } from 'gatsby'
import './index.css'
import Layout from '../../components/layout'
import JSONData from '../../data/faq.json'

const QuestionsPage = () => {
    return (
        <Layout>
            <div className='faq-page-container'>
            <section>
                <div className='faqs'>
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    {
                    JSONData.map((item, index) => {
                        return <div key={index} className='faq-container'>
                                <div className='faq-question'>
                                <p>{index + 1}. <span style={{color: `#b007a8`}}>{item.question}</span></p>
                                </div>
                                <div className='faq-answer'>
                                <p>{item.answer}</p>
                                </div>
                            </div>
                    })
                    }
                </div>
            </section>
            <section>
                <div style={{marginBottom: `0`}} className='contact-banner'>
                <div className='contact-banner-left'>
                    <p>
                    Ready to start your web project?
                    </p>
                </div>
                <div className='contact-banner-right'>
                    <Link style={{width: `25em`}} id='contact-link' to='/contact/'>START YOUR WEB PROJECT</Link>
                </div>
                </div>
            </section>
            </div>
        </Layout>
    )
}

export default QuestionsPage