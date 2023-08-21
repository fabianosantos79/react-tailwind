const Article = ({ title, text, tags, image, alt }) => {
    return (
        <div className="p-5 bg-gray-200 dark:bg-gray-500 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">{title}</h3>
            <div className="grid gap-4">
                {
                    text.map((content, index) => <p className="text-gray-700 dark:text-gray-300" key={index}>{content}</p>)
                }
            </div>
        </div>
    )
}

export default Article