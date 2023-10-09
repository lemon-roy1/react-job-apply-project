

const Blogs = () => {
    return (
        <div className="m-6">
            <div className="collapse collapse-plus bg-base-200 m-2 p-4">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is JavaScript ?
                </div>
                <div className="collapse-content">
                    <p className="text-xl">JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 m-2 p-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is difference between JavaScript and ES6 ?
                </div>
                <div className="collapse-content">
                    <p className="text-xl">Quora ES6 is the standard governing JavaScript where as JavaScript is the programming language. ES6 is next gen JavaScript syntax and nothing else. There are also some added features in the ES6 version of JavaScript such as arrow functions , rest and spread operator, destructuring , promises etc.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 m-2 p-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is ECMAScript full form?
                </div>
                <div className="collapse-content">
                    <p className="text-xl">ECMAScript, also known as JavaScript, is a programming language adopted by the European Computer Manufacturers Association as a standard for performing computations in Web applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;