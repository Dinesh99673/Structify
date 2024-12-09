import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Main Content */}
            <main className="flex flex-col items-center text-center p-10 z-10">
                <h1 className="text-btn-lnk text-5xl font-bold mt-12">Welcome to Structify</h1>
                <p className="text-white text-lg mt-4 max-w-2xl">
                    Discover and interact with fundamental data structures. Visualize, modify, and understand complex algorithms in a simple and interactive way.
                </p>
                {/* Data Structure Section */}
                <section id="data-structures" className="mt-16 w-full max-w-4xl">
                    <h2 className="text-[#F5F5F5] text-3xl font-semibold mb-8">Explore Data Structures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'Linked List', description: 'Visualize and perform operations on linked lists.', link: '/Structify/linked-list' },
                            { name: 'Stack', description: 'Explore stack operations and see how LIFO works.', link: '/Structify/stack' },
                            { name: 'Queue', description: 'Simulate queue processes and learn about FIFO.', link: '/Structify/' },
                            { name: 'Binary Tree', description: 'Understand tree traversal and node manipulation.', link: '/Structify/' }
                        ].map((structure) => (
                            <div
                                key={structure.name}
                                className="bg-gray-950 p-6 rounded-lg shadow-lg"
                            >
                                <h3 className="text-pri-text text-2xl font-bold">{structure.name}</h3>
                                <p className="text-gray-300 mt-2">{structure.description}</p>
                                <button className="mt-4 px-4 py-2 bg-btn-lnk text-deep-black font-semibold rounded-md hover:bg-hover-state">
                                    <Link to={structure.link} className='text-gray-950'>Learn More</Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
