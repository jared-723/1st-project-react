import './styles/CardBox.css'
const CardBox = ({handleIndex, index}) => {
    return(
        <>
        <section className="CardBox"> 
            <h1>Fortune Cookies</h1>
                <section className='contentCard'>
                    <button onClick={handleIndex}>Try luck!</button>
                    <article>
                        <p>{index.phrase}</p>
                    </article>
                </section>
            <footer>Author: {index.author}</footer>
        </section>
        </>
    );
}
export default CardBox