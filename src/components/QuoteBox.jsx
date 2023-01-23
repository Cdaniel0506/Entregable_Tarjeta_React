import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newQuote, color}) => {
  return (
    <div className="quoteBox " style={{color: color}}>
        <p className="quoteBox_quote">{quote.quote}</p>
        <h3 className="quoteBox_author">{quote.author}</h3>
        <i className='quoteBox_icon bx bxs-quote-alt-left' ></i>
        <i class='quoteBox_icon_2 bx bxs-smile'></i>
        <QuoteButton color={color} newQuote={newQuote}/>
    </div>
  )
}

export default QuoteBox