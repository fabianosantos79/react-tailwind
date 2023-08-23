const Article = ({ title, text, tags, image, alt }) => {
    return (
        <div className="p-5 bg-gray-200 dark:bg-gray-500 sm:rounded-xl sm:shadow-lg flex flex-col items-center gap-2">

            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">{title}</h3>

            <div className="w-full justify-end gap-4 hidden md:flex">
                {
                    tags.map((tag, index) => <span key={index} className="bg-gray-500 py-1 px-2 rounded-full text-xs text-white font-semibold dark:bg-gray-200 dark:text-gray-700">{tag}</span>)

                }
            </div>

            {image && <img src={image} className="py-2" />}
            {image && alt && <span className="sr-only">{alt}</span>}

            <div className="grid gap-4">
                {
                    text.map((content, index) => <p className="text-gray-700 dark:text-gray-300" key={index}>{content}</p>)
                }
            </div>
        </div>
    )
}

export default Article