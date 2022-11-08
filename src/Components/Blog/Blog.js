import React from 'react';
import useTitle from '../hook/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div className="max-w-full p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	<article>
		<h2 className="text-2xl font-bold">Difference between SQL and NoSQL</h2>
        <h2 className='text-xl mt-4 font-bold'>SQL database</h2>
		<p className="mt-4 dark:text-gray-400">SQL is the programming language used to interface with relational databases.</p>
		<div className="flex items-center mt-8 space-x-4">
			<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">Leroy Jenkins</h3>
				<time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
			</div>
		</div>
	</article>
</div>
    );
};

export default Blog;