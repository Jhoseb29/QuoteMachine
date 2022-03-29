

const QuoteBox = ({quote}) => {

    return (
        
        <div className="d-flex">
            <div className="quote">
                <i class="fas fa-quote-left"></i>
            </div>
            <div >
                <p className="content">
                    {quote.quote}
                </p>
            </div><p className="author">{quote.author}</p>
        
        
        <div>
         <button className='btn-twt'  title=''Share in twitter><a href="https://twitter.com/intent/tweet?text=Frases%20celebres%20para%20compartir%20en%20Twitter&hashtags=programación,html"
          target="_blank"><i class="fa-brands fa-twitter"></i></a></button>   
        </div>
    </div>
    );
};

export default QuoteBox;

