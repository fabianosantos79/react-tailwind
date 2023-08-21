import data from '../../../articles.json'
import Article from '../Article/Article';

const ArticleList = () => {
    return (
        <div className='mt-5 grid gap-5 max-w-2xl m-auto sm:grid-cols-2 lg:grid-cols-3 sm:mt-0 lg:max-w-[1000px]'>
            {data.map((props, index) => <Article key={index} {...props} />)
            }
        </div>
    )
}
export default ArticleList;