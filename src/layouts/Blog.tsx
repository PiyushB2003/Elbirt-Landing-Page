const Blog = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#003569] text-xs font-bold my-2">OUR BLOG</p>
                <h3 className="text-[#17414F] text-3xl font-bold">Latest News</h3>
            </div>

            <div className="flex gap-x-8 px-24 justify-center flex-wrap my-5">
                <div className="flex flex-col space-y-4">
                    <div className="bg-white rounded-lg shadow-lg min-w-full min-h-[340px] bg-[url('/images/news-1.jpeg')] bg-no-repeat bg-cover">
                        <div className="bg-[#003569] inline-block text-xs py-1 px-4 rounded-r-full text-white relative top-3 right-2">
                            20 APR
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg min-w-[265px] min-h-36 bg-[url('/images/news-2.jpeg')] bg-no-repeat bg-center bg-cover">
                        <div className="bg-[#003569] inline-block text-xs top-3 py-1 px-4 rounded-r-full text-white relative right-2">
                            20 APR
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="bg-white rounded-lg shadow-lg w-[265px] h-36 bg-[url('/images/news-1.jpeg')] bg-no-repeat bg-cover">
                        <div className="bg-[#003569] inline-block text-xs top-3 py-1 px-4 rounded-r-full bg-center text-white relative right-2">
                            20 APR
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg w-full h-[340px] bg-[url('/images/news-2.jpeg')] bg-no-repeat bg-cover">
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="bg-white rounded-lg shadow-lg w-full h-[340px] bg-[url('/images/news-1.jpeg')] bg-center bg-no-repeat bg-cover">
                        <div className="bg-[#003569] inline-block text-xs py-1 px-4 rounded-r-full text-white relative top-3 right-2">
                            20 APR
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg w-[265px] h-36 bg-[url('/images/news-2.jpeg')] bg-no-repeat bg-cover bg-center">
                        <div className="bg-[#003569] inline-block text-xs top-3 py-1 px-4 rounded-r-full text-white relative right-2">
                            20 APR
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="bg-white rounded-lg shadow-lg w-[265px] h-36 bg-[url('/images/news-1.jpeg')] bg-no-repeat bg-cover">
                        <div className="bg-[#003569] inline-block text-xs top-3 py-1 px-4 rounded-r-full text-white relative right-2">
                            20 APR
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg w-full h-[340px] bg-[url('/images/news-2.jpeg')] bg-no-repeat bg-cover">
                        <div className="bg-[#003569] inline-block text-xs py-1 px-4 rounded-r-full text-white relative top-3 right-2">
                            17 MAR
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
